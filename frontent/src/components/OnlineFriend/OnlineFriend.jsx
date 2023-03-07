import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../Actions/UserAction'
import './OnlineFriend'

function OnlineFriend() {

    const { user } = useSelector((state) => state.authReducer.authData)


    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="follower">
            <div>
                <img  src="https://1.bp.blogspot.com/-kB9LcL_xn6c/WAyD0bE99iI/AAAAAAAAb3Y/RjE2S1JmwikO3jmuaSEloQPXO1v6kPIwACLcB/s1600/baahubali-prabhas.jpg" style={{cursor:"pointer"}} alt=""
                    className='followerImg' />
                <div className="name">
                    <span style={{cursor:"pointer"}}>kannan</span>
                    <p>Online</p>
                </div>
            </div>
          

        </div>
    )
}

export default OnlineFriend