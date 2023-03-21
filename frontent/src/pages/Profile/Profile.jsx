import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import './Profile.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import ProfileCar from '../../components/ProfileCar'

function Profile() {
  return (
   <div className="Profile">
    <ProfileLeft/>
    <div className="profile-center">
      <ProfileCar  location="profilePage"/>
      {/* <ProfileCard location="profilePage" /> */}
      <PostSide/>
     
    </div> 
    <RightSide/>
   </div>
  )
}

export default Profile