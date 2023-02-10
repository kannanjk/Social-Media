import React from 'react'
import './RightSide.css'
import {UilSetting} from '@iconscout/react-unicons'
import home from '../../image/home.png'
import note from '../../image/note.png'
import comment from '../../image/comment.png'
import TrendCard from '../TrendCard/TrendCard'
function RightSide() {
  return (
   <div className="rightSide">
    <div className="navIcon">
        <img src={home} alt="" />
        <UilSetting/>
        <img src={note} alt="" />
        <img src={comment} alt="" />
    </div>
    <TrendCard/>
    <button className="button r-button">
        shere
    </button>
   </div>
  )
}

export default RightSide