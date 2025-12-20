'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, X, ExternalLink, Users, Calendar, MapPinned } from 'lucide-react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

interface UltraGroup {
  _id: string;
  name: string;
  slug: string;
  club: string;
  city: string;
  country: string;
  countryCode: string;
  yearFounded: number;
  membersEstimate?: string;
  colors: string[];
  logo?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface InteractiveMapProps {
  groups: UltraGroup[];
  className?: string;
}

export default function InteractiveMap({ groups, className = '' }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<UltraGroup | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const locale = useLocale();
  const t = useTranslations('ultras');

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    // Dynamically import Leaflet
    const loadMap = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      // If map already exists, destroy it
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Create map
      const map = L.map(mapRef.current!, {
        center: [30, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 18,
        scrollWheelZoom: true,
        zoomControl: true,
      });

      // Add dark tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Create custom icon
      const createIcon = (color: string) => {
        return L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="
              width: 24px;
              height: 24px;
              background: ${color || '#22c55e'};
              border: 3px solid white;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0,0,0,0.4);
              cursor: pointer;
              transition: transform 0.2s;
            "></div>
          `,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -12]
        });
      };

      // Add markers for each group
      groups.forEach((group) => {
        if (group.coordinates?.lat && group.coordinates?.lng) {
          const marker = L.marker(
            [group.coordinates.lat, group.coordinates.lng],
            { icon: createIcon(group.colors?.[0] || '#22c55e') }
          );

          marker.on('click', () => {
            setSelectedGroup(group);
          });

          marker.addTo(map);
        }
      });

      mapInstanceRef.current = map;
      setIsMapLoaded(true);
    };

    loadMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [groups]);

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-zinc-900"
        style={{ zIndex: 1 }}
      />

      {/* Loading State */}
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 rounded-2xl">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-zinc-400">Loading map...</span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 border border-zinc-800">
        <h4 className="text-sm font-semibold text-white mb-2">{t('map')}</h4>
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <MapPinned className="h-4 w-4 text-green-500" />
          <span>{groups.length} {t('all')}</span>
        </div>
      </div>

      {/* Selected Group Panel */}
      {selectedGroup && (
        <div className="absolute top-4 right-4 z-20 w-80 bg-zinc-900/95 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
          {/* Header with color accent */}
          <div
            className="h-2"
            style={{ backgroundColor: selectedGroup.colors?.[0] || '#22c55e' }}
          />

          <div className="p-4">
            {/* Close button */}
            <button
              onClick={() => setSelectedGroup(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <X className="h-4 w-4 text-zinc-400" />
            </button>

            {/* Group Info */}
            <div className="pr-8">
              <h3 className="text-lg font-bold text-white mb-1">
                {selectedGroup.name}
              </h3>
              <p className="text-green-500 text-sm font-medium mb-3">
                {selectedGroup.club}
              </p>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <MapPin className="h-4 w-4" />
                <span>{selectedGroup.city}, {selectedGroup.country}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Calendar className="h-4 w-4" />
                <span>{t('founded')} {selectedGroup.yearFounded}</span>
              </div>
              {selectedGroup.membersEstimate && (
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Users className="h-4 w-4" />
                  <span>{selectedGroup.membersEstimate} {t('members')}</span>
                </div>
              )}
            </div>

            {/* Colors */}
            {selectedGroup.colors && selectedGroup.colors.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                {selectedGroup.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-zinc-700"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}

            {/* View Button */}
            <Link
              href={`/${locale}/ultras/${selectedGroup.slug}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
            >
              <span>View Group</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Leaflet CSS Override for Dark Theme */}
      <style jsx global>{`
        .leaflet-container {
          background: #18181b;
          font-family: inherit;
        }
        .leaflet-control-zoom {
          border: none !important;
        }
        .leaflet-control-zoom a {
          background: #27272a !important;
          color: #fff !important;
          border: 1px solid #3f3f46 !important;
        }
        .leaflet-control-zoom a:hover {
          background: #3f3f46 !important;
        }
        .leaflet-control-attribution {
          background: rgba(24, 24, 27, 0.8) !important;
          color: #71717a !important;
        }
        .leaflet-control-attribution a {
          color: #22c55e !important;
        }
        .custom-marker div:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
