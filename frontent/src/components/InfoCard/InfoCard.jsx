import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'

function InfoCard() {
    const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='2rem'
                        onClick={() => setModalOpened(true)} />
                    <ProfileModel modalOpened={modalOpened}
                        setModalOpened={setModalOpened} />
                </div>
            </div>
            <div className="info">
                <span>
                    <b>Status in </b>
                </span>
                <span> RelationShip</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in</b>
                </span>
                <span> Kozhikkod </span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Kinfra Park</span>
            </div>
            <button className='button  ' >Logout</button>
        </div>
    )
}

export default InfoCard