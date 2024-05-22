// App.js
import React from 'react';
// import MapComponent from './Mapcomponent';
import BookAmbulance1 from './component/BookAmbulance1';
import BookAmbulance2 from './component/BookAmbulance2';
import BookAmbulance3 from './component/BookAmbulance3';
import BookAmbulance4 from './component/BookAmbulance4';
import ClickHere from './component/Clickhere'
import Home from './component/Home'
import Navbar from './component/Navbar';
import Driver from './component/Driver'
import Login from './component/Login'
import Nearest from './component/Nearest';
import Map from './component/Map'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='w-screen h-screen'>
    {/* <Navbar/>   */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/map" element={<Map/>}/>
      <Route path="/BookAmbulance1" element={<BookAmbulance1/>}/>
      <Route path="/BookAmbulance2" element={<BookAmbulance2/>}/>
      <Route path="/BookAmbulance3" element={<BookAmbulance3/>}/>
      <Route path="/BookAmbulance4" element={<BookAmbulance4/>}/>
      <Route path="/driver" element={<Driver/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/clickhere" element={<ClickHere/>}/>
      
    </Routes>
    </div>
  );
};

export default App;
