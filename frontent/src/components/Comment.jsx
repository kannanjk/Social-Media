import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Comm from './Comm';
const API = axios.create({ baseURL: "http://localhost:5000" })

function Comment({ data }) {
    const [comment, setComment] = useState([])
    const use = comment.user
    const comm = comment.data
    useEffect(() => {
        const comment = async () => { 
            try {
                const res = await API.get(`post/${data._id}/comment`)
                setComment(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        comment()
    },) 

    return (
        <div >
            <Comm comm={comm} use={use} />
        </div>
    )
}

export default Comment