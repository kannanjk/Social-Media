import React, { useState } from 'react'
// import { createComment } from '../../Api/PostRequest';
import './Comments.scss'
import { useSelector } from 'react-redux';
// import {createComment} from '../../Actions/CommentAction.js'
import Comment from '../Comment';
import axios from 'axios';
import { message } from 'antd'
const API = axios.create({ baseURL: "http://localhost:5000" })

function Comments({ data }) {
  const { user } = useSelector((state) => state.authReducer.authData)

  const [content, setContent] = useState()
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const handlesubmit = async (e) => {
    e.preventDefault()
    if (!content.trim()) return
    setContent('')
    const newComment = {
      content,
      postId: data._id,
      user: user._id,
      firstname: user.firstname,
      profilePicture:user.profilePicture
    }
    const res = await API.post('/post/comment', newComment)
    if (res.data.success) {
      message.success(res.data.message)
    } else {
      message.error("Somthing error")
    }
  }

  return (
    <div className="comments">
      <div className="write">
        <img src={user.coverpicture
          ? serverPublic + user.profilePicture
          : serverPublic + "defaultCover.png"} alt="" />
        <input
          type="text"
          placeholder='Write a comment'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        {
          content ?
            <button type='submit' onClick={handlesubmit} >Sent</button> : null
        }
      </div>
      <div className="comment">
        <div className="info">
          {
            <Comment data={data} />
          }
        </div>


      </div>
    </div>
  )
}


export default Comments