import React ,{useState}from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
function BookAmbulance1() {
  const navigate = useNavigate();
  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  async function Submit(){
    toast.success("OTP Send Successfully")
    axios.post('http://localhost:4000/api/v1/sendmail',{email,name})
    .then((res)=>{localStorage.setItem("otp",res.data.otp);localStorage.setItem("myemail",email);
    navigate("/BookAmbulance2");});
  }
  return (
    <>
    <Navbar/>
    <div className='flex  justify-center items-center w-[100%] h-[80%]'>
     <div className='w-[27%] flex flex-col gap-2'>
     <div className='text-2xl text-blue-400 font-bold text-center'>Your AmbuSaver ambulance medical </div>
      <div className='text-2xl text-blue-400 font-bold text-center'>service</div>
      <p className='text-xl text-gray-600 text-center' >One Click and AmbuSaver Ambulance comes right in</p>
      <p className='text-xl text-gray-600 text-center'>front of the door for help.</p>
      <input type='email' value={email} placeholder='Your email id' className='border-2 p-[1%] m-[4%]' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='name' value={name} placeholder='Your Name' className='border-2 p-[1%] my-[2%] mx-[4%]' onChange={(e)=>setName(e.target.value)}/>
      <button onClick={Submit} className='bg-blue-400 text-white m-[4%] p-[1.5%] text-lg rounded-md'>SUBMIT</button>
     </div>
    </div>
    </>
  )
}

export default BookAmbulance1;
