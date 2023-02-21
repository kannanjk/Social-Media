import React from 'react'
import Followers from '../Followers/Followers'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Profile.css'

function Profile() {
  return (
    <div className='profileSide' >
       <LogoSearch/>
       <ProfileCard location="homepage" />
       <Followers/>
    </div>
  )
}

export default Profile