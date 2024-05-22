import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function BookAmbulance2() {
  const navigate = useNavigate()
  const[getOtp,setGetOtp] = useState("") 
  const[Otp,setOtp] = useState("") 
  function Submit(){
    if(localStorage.getItem("otp")===Otp){
      toast.success("OTP Verified")
      navigate("/BookAmbulance3")
    }
    else{
      toast.error("OTP Not Verified")
    }
   console.log(getOtp)
  }
  return (
    <>
    <Navbar/>
    <div className='flex  justify-center items-center w-[100%] h-[70%]'>
     <div className='w-[27%] flex flex-col gap-2'>
     <div className='text-2xl text-blue-400 font-bold text-center'>Enter Your OTP</div>
      <input type='number'value={Otp} placeholder='Enter Your OTP' className='border-2 p-[1%] m-[4%]' onChange={(e)=>setOtp(e.target.value)}/>
      <button onClick={Submit} className='bg-blue-400 text-white m-[4%] p-[1.5%] text-lg rounded-md'>VERIFY</button>
     </div>
    </div>

    </>
    )
}

export default BookAmbulance2;