// CSS module declarations
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'leaflet/dist/leaflet.css' {
  const content: string;
  export default content;
}

// Leaflet global type
declare namespace L {
  interface Map {
    remove(): void;
  }
}
