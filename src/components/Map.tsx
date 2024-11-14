import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import iconPerson from './MapIcon';
import 'leaflet/dist/leaflet.css';
import OpenCageGeocode from 'opencage-api-client';

interface MapProps {
  address: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface GeocodeResult {
  results: Array<{
    geometry: {
      lat: number;
      lng: number;
    };
  }>;
}

const Map: React.FC<MapProps> = ({ address }) => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    OpenCageGeocode.geocode({
      q: address,
      key: 'da468ebbcee646238b45564802eb3055',
    }).then((data: GeocodeResult) => {
      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        setCoordinates({ lat, lng });
      }
    });
  }, [address]);

  useEffect(() => {
    if (coordinates) {
      // Initialize map if it hasn't been initialized yet
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView(
          [coordinates.lat, coordinates.lng],
          13
        );
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(mapRef.current);
      }
      //
      L.marker([coordinates.lat, coordinates.lng], {
        icon: iconPerson,
      }).addTo(mapRef.current);
      mapRef.current.setView([coordinates.lat, coordinates.lng], 13);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordinates]);

  return <div id="map" style={{ height: '400px' }} />;
};

export default Map;
