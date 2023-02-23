import React from 'react'
import './Followers.scss'
import {FollowersData} from '../../Data/FollowersData'
import User from '../User/User'

function Followers() {
  return (
    // <div className="con">
    <div className='followersCard' >
        <h3>People you may know</h3>
        {
          FollowersData.map((person,id)=>{
            return(
            <User person={person} key={id} />
            )
          })
        }
    </div>
    // </div>
  )
}

export default Followers