import React from 'react'
import Capture from '../pictures/Capture.PNG'
import Navbar from '../component/Navbar'
function Home() {
  return (
    <div className='w-[100%] h-[100%]'>
      <Navbar />
      <div className=' flex mt-[5%]'>
        
        <div className='w-1/2 flex items-center'>
          <div className='flex justify-center '>
            <div className='flex flex-col gap-3 w-[60%] p-[2%]'>
            <p>
            <p className='text-4xl font-bold text-center'>24/7 Emergency</p>
            <p className='text-4xl font-bold text-center'>Ambulance Care with</p>
            <p className='text-4xl font-bold text-center'>AmbuSaver</p>
            </p>  
           
            <p className='text-xl font-semibold text-blue-400 text-center'>For Emergency Medical Service</p>
            <p className='text-center'>Help / Rescues the Patient in case of the Emergency situation by doing just a click. AmbuSaver Ambulance comes right in front of the door for help.</p>
            <button className='text-white mx-[2%] bg-pink-600 p-[2%] rounded-lg text-base' >
              <a href='/BookAmbulance1'>

              BOOK NOW
              </a>
              </button>
            <p className='text-xl text-center'>OR</p>
            <p className='text-white mx-[2%] bg-pink-600 p-[2%] rounded-lg text-base text-center'>Click Here</p>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
         <img src={Capture} alt=""/>
        </div>
      </div>
      {/* <div className='text-3xl font-bold text-center mt-[2%]'>Why Choose Us</div> */}
    </div>
  )
}

export default Home
