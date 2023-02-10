import React from 'react'
import './Auth.css'
import login from '../../image/log.png'

function Auth() {
  return (
   <div className="Auth">
    <div className="a-left">
        <img src={login} alt="" />
        <div className="webname">
            <h1>ZKC Media</h1>
            <h6>Explore the ideas throughot the world</h6>
        </div>
    </div>
    <SignUp/>
   </div>
  )
}

function SignUp(){
  return (
    <div className="a-right">
      <div className="infoform">

        <h3>Sign Up</h3>
        <div>
          <input type="text" name='firstname' placeholder='First name' className="infoinput" />
          <input type="text" name='lasttname' placeholder='last name' className="infoinput" />
        </div>
        <div>
          <input type="text" name='username' className="infoinput" placeholder='User name' />
        </div>
        <div>
          <input type="text" name='password' placeholder='Password' className="infoinput" />
          <input type="text" name='password' Confirm placeholder='Password' className="infoinput" />
        </div>
      </div>
    </div>
  )
}

export default Auth