import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../pictures/Logo.PNG'
function Navbar() {
  const navigate = useNavigate()
  function Logout(){
    localStorage.removeItem('email');
    navigate('/login')
  }
  return (
    <div className='flex w-[100%] h-[8%] mb-[1%]'>
      <div className='w-[20%]'>
        <a href='/'>

      <img src={Logo} alt="" className='h-[100%] w-[100%]'/>
        </a>
      </div>
      <div className='w-[80%] flex justify-center '>
        <div className='w-[80%] flex justify-center items-center gap-[4%] text-base font-semibold'>
            <div>About</div>
            <div>
              <a href='/BookAmbulance3'>

              Services
              </a>
              </div>
            <div>Contact Us</div>
            <div><Link to="/map">Find Nearest Hospital to Me</Link></div>
            {
              localStorage.getItem('email')?<div>
                <button><Link to='/driver'>View My Bookings</Link></button>
                <button>Change Status</button>
              </div>
              :""
            }
        </div>
        <div className='w-[20%] flex gap-[4%] justify-center items-center'>
            <button className='w-[40%] text-base font-semibold bg-pink-500 h-[70%] rounded-md text-white'><Link to="/BookAmbulance1">Book Now</Link></button>
             {
              localStorage.getItem('email')?
              <button className='w-[40%] text-base font-semibold bg-white border-pink-500 border-2 h-[70%] rounded-md text-pink-500' onClick={Logout}>Logout</button>
              :<button className='w-[40%] text-base font-semibold bg-white border-pink-500 border-2 h-[70%] rounded-md text-pink-500'><Link to="/login">Login</Link></button>

             }       
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
