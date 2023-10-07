import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Comm from './Comm';
const API = axios.create({ baseURL: "http://localhost:5000" })

function Comment({ data }) {
    const [comment, setComment] = useState([])
    const comm = comment.data
    console.log(comm.userId);
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
            {
                <Comm comm={comm} />
            }
        </div>
    )
}

export default Comment