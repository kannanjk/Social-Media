import React, { useState } from 'react'
import './Auth.scss'
import login from '../../image/log.png'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../Actions/AuthAction'

function Auth() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignup, setIsSignup] = useState(true)
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
    // <div className="Auth">
    //   {/* Left side */}
    //   <div className="a-left">
    //     <img src={login} alt="" />
    //     <div className="webname">
    //       <h1>ZKC Media</h1>
    //       <h6>Explore the ideas throughot the world</h6>
    //     </div>
    //   </div>
    //   {/*  Right side  */}
    //   <div className="a-right">
    //     <form className="infoform authForm" onSubmit={handleSubmit} >
    //       <h3> {isSignup ? "Sign Up" : "Log In"} </h3>
    //       {
    //         isSignup && (
    //           <div>
    //             <input type="text" name='firstname'
    //               placeholder='first Name'
    //               className="infoinput"
    //               onChange={handleChange}
    //               value={data.firstname}
    //             />
    //             <input type="text" name='lastname'
    //               placeholder='Last Name'
    //               className="infoinput"
    //               onChange={handleChange}
    //               value={data.lastname}
    //             />
    //           </div>
    //         )
    //       }
    //       <div>
    //         <input type="email" name='username' className="infoinput"
    //           placeholder='Email'
    //           onChange={handleChange}
    //           value={data.username}
    //         />
    //       </div>
    //       <div>
    //         <input type="password"
    //           name='password'
    //           placeholder='Password'
    //           className="infoinput"
    //           onChange={handleChange}
    //           value={data.password}
    //         />
    //         {
    //           isSignup && <input type="password" 
    //             name='confirmpass'
    //             placeholder='confirmPassword'
    //             className="infoinput"
    //             onChange={handleChange}
    //             value={data.confirmpass}
    //           />
    //         }
    //       </div>
    //       <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "10px" }} >
    //         * Confirm Password is not same
    //       </span>
    //       <div>
    //         <span style={{ fontSize: '12px', cursor: 'pointer' }}
    //           onClick={() => {
    //             setIsSignup((prev) => !prev);
    //             reseForm()
    //           }}>
    //           {isSignup ? "Already i have an account!" : "Create New Account ?"}
    //         </span>
    //       </div>
    //       <button className='button infobutton' type='submit' disabled={loading} >
    //         {loading ? "Loading..." : isSignup ? "Sign Up" : "Log In"}
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div class="user">
      <header class="user__header">
        <img src="http://pluspng.com/img-png/group-of-friends-png-hd-cooperation-friend-friendship-gang-group-team-teammate-icon-512.png" alt="" />
        <h1 class="user__title">Let's make a good friendship</h1>
      </header>

      <form class="form" onSubmit={handleSubmit} >
        <h2> {isSignup ? "Sign Up" : "Log In"} </h2>
        <br />
        {isSignup && (
          <div>
            <div class="form__group">
              <input type="text"
                placeholder="firstname"
                class="form__input"
                name='firstname'
                onChange={handleChange}
                value={data.firstname}
              />
            </div>

            <div class="form__group">
              <input type="text"
                placeholder="lastname"
                class="form__input"
                name='lastname'
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          </div>
        )}
        <div class="form__group">
          <input type="text"
            placeholder="username"
            class="form__input"
            name='username'
            onChange={handleChange}
            value={data.username}
          />
        </div>

        <div class="form__group">
          <input type="password"
            placeholder="password"
            class="form__input"
            name='password'
            onChange={handleChange}
            value={data.password}
          />
        </div>

        {isSignup && (
          <div class="form__group">
            <input type="password"
              placeholder="ConfimPassword"
              name='confirmpass'
              class="form__input"
              onChange={handleChange}
              value={data.confirmpass}
            />
            <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "14px", alignSelf: "flex-end", marginRight: "10px" }} >
              * Confirm Password is not same
            </span>
          </div>
        )}

        <button class="btn" type="submit">
          {isSignup ? "Sign Up" : "Log In"}
        </button>
      </form>
      <br />
      <span style={{ fontSize: '17px', cursor: 'pointer' }}
        onClick={() => {
          setIsSignup((prev) => !prev);
          reseForm()
        }}>
        {isSignup ? "Already i have an account!" : "Create New Account ?"}
      </span>
    </div>
  )
}


export default Auth