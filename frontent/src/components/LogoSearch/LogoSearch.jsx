import React from 'react'
import logo from '../../image/log.png'
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons'

function LogoSearch() {
  return (
    <div className='LogoSearch' >
       <img src={logo} alt="" style={{width:'32px'}} />
       <div className="search">
        <input type="text"
        placeholder='#Explore' />
        <div className="s-icon">
            <UilSearch/>
        </div>
       </div>
    </div>
  )
}

export default LogoSearch