import React, { useEffect } from 'react'
import { format } from 'timeago.js'
import '../Data/Comment.css'
import axios from 'axios'
const API = axios.create({baseURL:"http://localhost:5000"}) 

function Comm({ comm }) {
    useEffect(()=>{
        // const res = API.get(`/user/${comm.userId}`)
    })
    return (
        <div>
            {
                comm?.map(com => (
                    <>
                        <div className='head'>
                            <img className='mas' src="https://i.pinimg.com/originals/3d/66/78/3d667893c5788613ff3590ca218a9cb2.jpg" alt="" />
                            <h5 className='name'> {com.firstname} </h5>
                        </div>
                        <div>
                            <span className='comm' > {com.content} </span>
                        </div>
                        <span className='date' style={{ marginLeft: "700px" }}> {format(com.createdAt)}  </span>

                    </>
                ))
            }

        </div>


    )
}

export default Comm