import React,{useState} from 'react'
import Ambulance from '../pictures/ambulance.avif'
import Advance from '../pictures/Advance.avif'
import Mortuary from '../pictures/Mortuary.jpeg'
import Neonatal from '../pictures/Neonatal.jpg'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
function BookAmbulance3() {
  const navigate = useNavigate()
  function Submit(value){
    navigate("/BookAmbulance4", { state: { someData: value } })
  }
  return (
    <>
    <Navbar/>
    <div>
      <h1 className='text-center text-3xl font-semibold'>Select The Type Of Ambulance</h1>
      <div className='flex m-[1%] justify-center gap-[20%]'>
      <div className='w-1/4 flex flex-col justify-center items-center py-[2%]'>
        <img src={Ambulance} alt="" className='w-[70%]'/>
        <p onClick={()=>Submit("Basic")} className='text-2xl text-center'>Basic Ambulance</p>
      </div>
      <div className='w-1/4 flex flex-col justify-center items-center'>
        <img src={Advance} alt="" className='w-[70%]'/>
      <p onClick={()=>Submit("Basic")} className='text-2xl text-center'>Advance Ambulance</p>
      </div>
      </div>
      <div className='flex m-[1%] '>
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <img src={Mortuary} alt="" className='w-[40%]'/>
        <p onClick={()=>Submit("Basic")} className='text-2xl text-center'>Mortuary Ambulance</p>
      </div><div className='w-1/2 flex flex-col justify-center items-center'>
        <img src={Neonatal} alt="" className='w-[40%]'/>
        <p onClick={()=>Submit("Advance")} className='text-2xl text-center'>Neonatal Ambulance</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default BookAmbulance3
