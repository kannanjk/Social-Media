import React, { useState } from 'react'
import './Auth.css'
import login from '../../image/log.png'

function Auth() {
  const [isSignup, setIsSignup] = useState(true)
  const [data,setdata] = useState({firstname:"",lastname:"",email:"",password:"",confirmpass:""})
  
  const [confirmPass,setConfirmPss] = useState(false)
  const handleChange = (e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }

  return (
    <div className="Auth">
      {/* Left side */}
      <div className="a-left">
        <img src={login} alt="" />
        <div className="webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughot the world</h6>
        </div>
      </div>
      {/*  Right side  */}
      <div className="a-right">
        <form className="infoform authForm">
          <h3> {isSignup ? "Sign Up" : "Log In"} </h3>
          {
            isSignup && (
              <div>
                <input type="text"
                  name='fistname'
                  placeholder='First Name'
                  className="infoinput"
                  onChange={handleChange}
                />
                <input type="text" name='lastname'
                  placeholder='Last Name'
                  className="infoinput"
                  onChange={handleChange}
                />
              </div>
            )
          }
          <div>
            <input type="email" name='email' className="infoinput"
             placeholder='Email' 
             onChange={handleChange}
             />
          </div>
          <div>
            <input type="password"
              name='password'
              placeholder='Password'
              className="infoinput" 
              onChange={handleChange}
              />
            {
              isSignup && (<input type="password" name='confirmpass' 
               placeholder='confirmPassword' 
                className="infoinput"
                onChange={handleChange}
                />
            )}
          </div>
          <span style={{display:confirmPass ? "none" : "block" ,color:"red",fontSize:"12px"}} >
            * Confirm Password is not same
          </span>
          <div>
            <span style={{ fontSize: '12px', cursor:'pointer' }}
             onClick={()=>setIsSignup((prev)=>!prev)}>
             {isSignup ? "Already i have an account!" : "Create New Account ?"}
              </span>
          </div>
          <button className='button infobutton' type='submit' >{isSignup ? "Sign Up" : "Log In"}</button>
        </form>
      </div>
    </div>
  )
}


export default Auth