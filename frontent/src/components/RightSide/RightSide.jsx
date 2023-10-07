import React, { useState } from 'react'
import './RightSide.scss'
import { UilSetting } from '@iconscout/react-unicons'
import home from '../../image/home.png'
import note from '../../image/note.png'
import comment from '../../image/comment.png'
import TrendCard from '../TrendCard/TrendCard'
import ShereModel from '../ShereModel/ShereModel'
import { Link } from 'react-router-dom'
import OnlineFriend from '../OnlineFriend/OnlineFriend'

function RightSide() {
  const [modelopened, setModelopened] = useState(false)
  return (
    <div className="con">
      <div className="rightSide">
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

        <TrendCard />
        <button className="button r-button"
          onClick={() => setModelopened(true)} >
          share
        </button>
        <ShereModel modalOpened={modelopened}
          setModalOpened={setModelopened} />
      </div>
      <div style={{ marginTop: "16%" }}>
        <p style={{ marginBottom: "11%" }} >Online Friends</p>
        <OnlineFriend />
      </div>
    </div>
  )
}

export default RightSide