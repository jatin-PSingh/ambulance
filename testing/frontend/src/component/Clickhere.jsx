import React ,{useEffect,useState}from 'react'
import Loccard from './Card/Loccard'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Navbar  from './Navbar';
function BookAmbulance4() {
    const location = useLocation();
    const { someData } = location.state;
    const[data,setData] = useState([]);
    useEffect(()=>{
        axios.post("http://localhost:4000/api/v1/getnumber",{type:someData})
        .then((res)=>setData(res.data.response))
        console.log(data)
    },[])
    
  return (
    <>
    <Navbar/>
    <div>
            <p className='text-center my-[5%] text-5xl font-bold'>Ambulance Available</p>
        <div className='grid grid-cols-3 gap-[2%] mx-[5%]'>
            
            {data.map((res)=>(
                <Loccard data={res} className=""/>
            ))}
        </div>
    </div>
    </>
  )
}

export default BookAmbulance4
