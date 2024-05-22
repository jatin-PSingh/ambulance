import { useState } from "react"
import React from 'react'
import "./Login.css"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
function Login() {
   const navigate = useNavigate()
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  async function Submit(e){
   e.preventDefault()
   await axios.post('http://localhost:4000/api/v1/login',{email,password})
   .then(localStorage.setItem('email',email))
   navigate("/")
  }
  return (
    <div className="bg-img">
        <div className="content">
           <header>Login Form</header>
           <form action="#">
              <div className="field">
                 <span className="fa fa-user"></span>
                 <input type="text" value={email} required placeholder="Email or Phone" onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="field space">
                 <span className="fa fa-lock"></span>
                 <input type="password" className="pass-key" value={password} required placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                 <span className="show">SHOW</span>
              </div>
              <div className="pass">
                 <a href="#">Forgot Password?</a>
              </div>
              <div className="field">
           

                 <input type="submit"onClick={Submit} value="LOGIN" />
              
              </div>
           </form>
           <div className="login">
              Or login with
           </div>
           
           <div className="signup">
              Don't have account?
              <a href="#">Signup Now</a>
           </div>
        </div>
     </div>
     
  )
}

export default Login
