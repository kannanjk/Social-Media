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
    <Login/>
   </div>
  )
}

function Login(){
  return(
    <div className="a-right">
      <form className="infoform authForm">
        <h3>Login</h3>
        <div>
          <input type="text" name='username' className="infoinput" placeholder='User name' />
        </div>
        <div>
          <input type="text" name='password' placeholder='Password' className="infoinput" />
        </div>
        <div>
          <span style={{fontSize:'12px'}} >Create New Account?</span>
        </div>
        <button className='button infobutton' type='submit' >Signup</button>
      </form>
    </div>
  )
}

function SignUp(){
  return (
    <div className="a-right">
      <form className="infoform authForm">

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
        <div>
          <span style={{fontSize:'12px'}} >Already i have an account!</span>
        </div>
        <button className='button infobutton' type='submit' >Signup</button>
      </form>
    </div>
  )
}

export default Auth