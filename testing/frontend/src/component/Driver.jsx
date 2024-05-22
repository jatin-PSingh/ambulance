import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
function Driver() {
  const[data,setData] = useState([])
  useEffect(()=>{
    axios.post("http://localhost:4000/api/v1/getdriver",{email:localStorage.getItem('email')})
    .then((res)=>setData(res.data.response))

  },[],data)
  async function Accept(email){
    axios.post("http://localhost:4000/api/v1/accept",{email:email})
    window.location.reload();
  }
  return (
    <div className='h-[100%]'>
      <Navbar/>
      <p className='text-center text-3xl text-blue-400 mt-[2%] mb-[5%]'>All Requested Booking</p>
      {
        data.length>0?
        data.map((res)=>(
          <div className='flex w-[100%] m-[1%] text-xl items-center'>
            <div className='w-[12%] text-center'>{res.name}</div>
            <div className='w-[25%] text-center'>{res.address}</div>
            <div className='w-[16%] text-center'>{res.mobileNo}</div>
            <div className='w-[19%] text-center'>{res.email}</div>
            <div className='w-[12%] text-center'><button onClick={()=>{Accept(res.email)}} className='w-[50%] text-base font-semibold bg-pink-500 h-[100%] rounded-md text-white'>Accept</button></div>
            <div className='w-[12%] text-center'><button className='w-[50%] text-base font-semibold bg-pink-500 h-[100%] rounded-md text-white'>Reject</button></div>
          </div>
        ))
        :
        <div className='text-center text-3xl h-[50%] flex items-center justify-center'>
          <div>
            No Booking Available
          </div>
        </div>
      }
    </div>
  )
}

export default Driver
