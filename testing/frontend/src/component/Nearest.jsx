import React, { useState, useEffect } from 'react';

const NearestPlaceComponent = () => {
  const [userLocation, setUserLocation] = useState({});
  const [nearestPlace, setNearestPlace] = useState(null);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const calculateDistance = (place) => {
    const lat1 = userLocation.lat;
    const lon1 = userLocation.lng;
    const lat2 = place.lat;
    const lon2 = place.lng;

    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km

    return distance;
  };

  const places = [
    { name: 'Place 1', lat: 51.5074, lng: -0.1278 },
    { name: 'Place 2', lat: 48.8566, lng: 2.3522 },
  ];

  useEffect(() => {
    if (userLocation) {
      // Calculate distances and find the nearest place
      let nearest = null;
      let minDistance = Number.MAX_VALUE;

      places.forEach((place) => {
        const distance = calculateDistance(place);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = place;
        }
      });

      setNearestPlace(nearest);
    }
  }, [userLocation, places]);

  return (
    <div>
      {nearestPlace ? (
        <div>
          <h2>Nearest Place:</h2>
          <p>Name: {nearestPlace.name}</p>
          <p>Latitude: {nearestPlace.lat}</p>
          <p>Longitude: {nearestPlace.lng}</p>
        </div>
      ) : (
        <p>Finding nearest place...</p>
      )}
    </div>
  );
};

export default NearestPlaceComponent;
