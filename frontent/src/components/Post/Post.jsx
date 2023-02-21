import React, { useState } from 'react'
import './Post.css'
import like from '../../image/like.png'
import unlike from '../../image/unlike.png'
import shere from '../../image/shere.png'
import comment from '../../image/comment.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../Api/PostRequest'

function Post({ data }) {
  console.log(data)
  const { user } = useSelector((state) => state.authReducer.authData);
  
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  const handleLikes = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  return (
    <div className="post">
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : null} alt="" />
      <div className="postREact">
        <img src={liked ? like : unlike} onClick={handleLikes} alt="" className='icon'  style={{ cursor: "pointer" }} />
        <img src={comment} alt="" className='icon' style={{ cursor: "pointer" }} />
        <img src={shere} alt="" className='icon' style={{ cursor: "pointer" }} />
      </div>
      <span style={{ color: 'var(--gray)', fontSize: '13px' }} >{likes} likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc} </span>
      </div>
    </div>
  )
}

export default Post