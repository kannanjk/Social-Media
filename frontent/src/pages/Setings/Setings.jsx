import React, { Fragment } from 'react'
import { UilSetting } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import './setings.css'
import Logosearch from '../../components/LogoSearch/LogoSearch'
import home from '../../image/home.png'
import note from '../../image/note.png'
import comment from '../../image/comment.png'

function Setings() {
    return (

        <Fragment>
              <div className="cont">
            <div className="Chat">
                {/* Left Side */}
                <div className="Left-side-chat ">
                    <Logosearch />
                    <div className="Chat-container">
                        <h2>Setings</h2>
                        <div className="Chat-list">
                            {/* {chats.map((chat) => ( */}
                                <div
                                    onClick={() => {
                                        // setCurrentChat(chat)
                                    }} >
                                  <div>
                                  <h1 >Privacy</h1>
                                   <br />
                                   <h1 >notification</h1>
                                  </div>
                                </div>
                            {/* ))} */}
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="Right-side-chat ">
                    <div style={{ width: "20rem", alignSelf: "flex-end" }} >
                        <div className="navIcon">
                            <Link to='../home' >
                                <img src={home} alt="" />
                            </Link>
                            <Link to='../setings'>
                                <UilSetting />
                            </Link>
                            <img src={note} alt="" />
                            <Link to='../chat' >
                                <img src={comment} alt="" />
                            </Link>
                        </div>
                    </div>
                    {/* Chat body */}
                   

                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Setings