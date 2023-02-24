import React from 'react'
import './TrendCard.css'

import { TrendData } from '../../Data/TrendData'
function TrendCard() {
  return (
    <div className="con">
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {
            TrendData.map((trend)=>{
                return (
                    <div className="trend">
                        <span>#{trend.name} </span>
                        <span>{trend.sheres}k shares </span>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default TrendCard