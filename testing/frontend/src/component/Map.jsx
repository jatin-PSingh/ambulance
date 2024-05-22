import React, {useState,useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../index.css';
// import { Icon } from "leaflet";
import marker from '../pictures/Marker.png'
import axios from 'axios'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
function App() {
    const navigate = useNavigate()
    const[marker,setMarker] = useState([]);
    const [nearestPlace, setNearestPlace] = useState(null);
    const [userLocation1,setUserLocation1] = useState({})
    const [userLocation,setUserLocation] = useState(null)
    function onSubmit(){
      navigate("/clickhere", { state: { someData: nearestPlace.name } })
    }
     useEffect(() => {
      if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation1({
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
    const lat1 = userLocation1.lat;
    const lon1 = userLocation1.lng;
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
    { name: "St. Stephen's Hospital", lat: 28.6668, lng: 77.2146 },
    { name: 'AIIMS', lat: 28.5659, lng: 77.2111 },
    { name: 'Deen Dayal Upadhyay Hospital', lat: 28.6280, lng: 77.1123 },
    { name: 'Maharaja Agrasen Hospital', lat: 28.6741, lng: 80.248357 },
    { name: 'Moolchand', lat: 28.564, lng: 77.2342 },
    { name: 'Ram Manohar Lohia', lat: 26.7535, lng: 82.1426 },
    { name: 'Safdarjung', lat: 28.5647, lng: 77.1949 },
    { name: 'G. B. Pant', lat: 29.0229, lng: 79.4880 },
  ];
  function Find(){
    
      if (userLocation1) {
        
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
    
  
  }
  


    useEffect(() => {
      axios.get('http://localhost:4000/api/v1/getall') 
        .then(response => {
          setMarker(response.data.response);
        })
        .catch(error => {
          console.error('Error fetching marker data:', error);
        });
    }, []);
    
    
    // const markerIcon = new L.icon({
    //     iconUrl:require("../pictures/Marker.png"),
    //     iconSize:[35,45]
    // })
  return (
    <>
    <Navbar/>
    <div className="flex w-screen overflow-hidden h-screen mt-[2%] ">
      <div className="w-1/2 flex flex-col justify-center gap-3 h-[50%]">
       <p className="text-center text-4xl">FIND NEAREST HOSPITALS TO ME</p> 
       <p className="text-center text-xl m-[2%]">Our hospital search tool allows you to search for the nearest hospital to you by city, state, zip, or full address. Once a city, state, zip, or address is provided we can provide you with information on hospital locations near you. Enter your city, state, zip, or address in our hospital finder to find the nearest hospitals. Looking for the closest hospitals, we can help you find them.</p>
       
      {nearestPlace ? (
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-center text-2xl">Nearest Hospital:</h2>
          <p className="text-center text-2xl">Name: {nearestPlace.name}</p>
          <button className=" w-[14%] text-xl bg-pink-500 text-white rounded-lg h-[50%]" onClick={onSubmit}>Click here</button>
        </div>
      ) : (
        <button onClick={Find} className="text-xl bg-pink-500 text-white mx-[40%] rounded-lg h-[15%]">Find Hospital</button>
      )}
      </div>
      <div className="w-[50%] flex justify-center ">
      {
        nearestPlace?
        <MapContainer center={[24.6304,77.2177]} zoom={12}scrollWheelZoom={false} className="w-1/2">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {nearestPlace && <Marker position={nearestPlace}>
                <Popup>Nearest Hospital</Popup>
      </Marker>}
      
    </MapContainer>
        :
        <MapContainer center={[28.6204,77.2077]} zoom={12}scrollWheelZoom={false} className="w-1/2">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker.map((marker, index) => (
          <Marker  key={marker._id}position={marker.position}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        
      </MapContainer>
      }
      </div>
    </div>
    </>
    
  );
}

export default App;
