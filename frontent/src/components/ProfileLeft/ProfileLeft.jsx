import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import Followers from '../../components/Followers/Followers'

function ProfileLeft() {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <InfoCard/>
        <Followers/>
    </div>
  )
}

export default ProfileLeft