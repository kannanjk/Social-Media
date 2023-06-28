import React from 'react'
import { format } from 'timeago.js'
import '../Data/Comment.css'

function Comm({ comm }) {
    return (
        <div>
            {
                comm?.map(com => (
                    <div className='cont'>
                        <div className='head'>
                            <img className='mas' src="https://i.pinimg.com/originals/3d/66/78/3d667893c5788613ff3590ca218a9cb2.jpg" alt="" />
                            <h5 className='name'> {com.firstname} </h5>
                        </div>
                        <div>
                            <span className='comm'> {com.content} </span>
                        </div>
                        <span className='date' > {format(com.createdAt)}  </span>

                    </div>
                ))
            }

        </div>


    )
}

export default Comm