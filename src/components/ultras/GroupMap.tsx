'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

// Fix the default marker icon issue (known leaflet+webpack bug)
const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [13, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface GroupMapProps {
  coordinates?: { lat: number; lng: number } | null;
  stadiumName?: string;
  groupName: string;
}

export default function GroupMap({
  coordinates,
  stadiumName,
  groupName,
}: GroupMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fallback if no coordinates provided
  if (!coordinates || !coordinates.lat || !coordinates.lng) {
    return (
      <div className="w-full h-[200px] rounded-lg bg-zinc-800 flex flex-col items-center justify-center">
        <MapPin className="h-8 w-8 text-zinc-600 mb-2" />
        <p className="text-sm text-zinc-400 text-center px-4">
          Location coordinates not available
        </p>
      </div>
    );
  }

  // Only render map after client-side hydration
  if (!isMounted) {
    return (
      <div className="w-full h-[200px] rounded-lg bg-zinc-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  const { lat, lng } = coordinates;

  return (
    <div className="w-full h-[200px] rounded-lg overflow-hidden border border-zinc-700 shadow-lg">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        dragging={true}
        touchZoom={true}
      >
        {/* OpenStreetMap tiles (free, no API key needed) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker at group location */}
        <Marker position={[lat, lng]} icon={defaultIcon}>
          <Popup>
            <div className="font-medium text-sm">
              <p className="text-zinc-900 font-bold">{groupName}</p>
              {stadiumName && (
                <p className="text-zinc-700 text-xs">{stadiumName}</p>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
