import React from 'react'
import './Followers.css'
import {FollowersData} from '../../Data/FollowersData'

function Followers() {
  return (
    <div className='followersCard' >
        <h3>who is follwong you</h3>
        {
          FollowersData.map((follower,id)=>{
            return(
              <div className="follower">
                <div>
                  <img src={follower.img} alt="" 
                  className='followerImg' />
                  <div className="name">
                    <span>{follower.name}</span>
                    <span>@{follower.username}</span>
                  </div>
                </div>
                <button className='button fc-button' >
                  follow
                </button>
              </div>
            )
          })
        }
    </div>
  )
}

export default Followers