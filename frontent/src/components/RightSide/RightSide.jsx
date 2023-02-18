import React, { useState } from 'react'
import './RightSide.scss'
import { UilSetting } from '@iconscout/react-unicons'
import home from '../../image/home.png'
import note from '../../image/note.png'
import comment from '../../image/comment.png'
import TrendCard from '../TrendCard/TrendCard'
import ProfileModel from '../ProfileModel/ProfileModel'
import ShereModel from '../ShereModel/ShereModel'

function RightSide() {
  const [modelopened, setModelopened] = useState(false)
  return (
    <div className="con">
    <div className="rightSide">
      <div className="navIcon">
        <img src={home} alt="" />
        <UilSetting />
        <img src={note} alt="" />
        <img src={comment} alt="" />
      </div>
      <TrendCard />
      <button className="button r-button"
        onClick={() => setModelopened(true)} >
        share
      </button>
      <ShereModel modalOpened={modelopened}
        setModalOpened={setModelopened} />
    </div>
    </div>
  )
}

export default RightSide