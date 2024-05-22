// MapComponent.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = () => {
  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);
  const [distance, setDistance] = useState(null);

  const handleMapClick = (e) => {
    if (!startMarker) {
      setStartMarker(e.latlng);
    } else if (!endMarker) {
      setEndMarker(e.latlng);
    }
  };

  const calculateDistance = () => {
    if (startMarker && endMarker) {
      const distanceInMeters = startMarker.distanceTo(endMarker);
      setDistance(distanceInMeters);
    }
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={startMarker}><Popup>Start</Popup></Marker>
      <Marker position={endMarker}><Popup>End</Popup></Marker>
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distance && <p>Distance: {distance.toFixed(2)} meters</p>}
      <MapEventsHandler onMapClick={handleMapClick} />
    </MapContainer>
  );
};

const MapEventsHandler = ({ onMapClick }) => {
  useMapEvents({
    click: onMapClick,
  });

  return null;
};

export default MapComponent;
