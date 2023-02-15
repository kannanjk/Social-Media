import React, { useState } from 'react'
import './Auth.css'
import login from '../../image/log.png'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../Actions/AuthAction'

function Auth() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignup, setIsSignup] = useState(true)
  console.log(loading)
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: ""
  })

  const [confirmPass, setConfirmPss] = useState(true)
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPss(false)
    } else {
      dispatch(logIn(data))
    }
  }

  const reseForm = () => {
    setConfirmPss(true)
    setdata({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: ""
    })
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
        <form className="infoform authForm" onSubmit={handleSubmit} >
          <h3> {isSignup ? "Sign Up" : "Log In"} </h3>
          {
            isSignup && (
              <div>
                <input type="text" name='firstname'
                  placeholder='first Name'
                  className="infoinput"
                  onChange={handleChange}
                  value={data.firstname}
                />
                <input type="text" name='lastname'
                  placeholder='Last Name'
                  className="infoinput"
                  onChange={handleChange}
                  value={data.lastname}
                />
              </div>
            )
          }
          <div>
            <input type="email" name='username' className="infoinput"
              placeholder='Email'
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input type="password"
              name='password'
              placeholder='Password'
              className="infoinput"
              onChange={handleChange}
              value={data.password}
            />
            {
              isSignup && <input type="password" name='confirmpass'
                placeholder='confirmPassword'
                className="infoinput"
                onChange={handleChange}
                value={data.confirmpass}
              />
            }
          </div>
          <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "10px" }} >
            * Confirm Password is not same
          </span>
          <div>
            <span style={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={() => {
                setIsSignup((prev) => !prev);
                reseForm()
              }}>
              {isSignup ? "Already i have an account!" : "Create New Account ?"}
            </span>
          </div>
          <button className='button infobutton' type='submit' disabled={loading} >
            {loading ? "Loading..." : isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  )
}


export default Auth