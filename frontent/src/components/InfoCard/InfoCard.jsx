import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'

function InfoCard() {
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='2rem' />
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