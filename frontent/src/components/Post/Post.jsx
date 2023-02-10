import React from 'react'
import './Post.css'
import like from '../../image/like.png'
import unlike from '../../image/unlike.png'
import shere from '../../image/shere.png'
import comment from '../../image/comment.png'

function Post({data}) {
  return (
   <div className="post">
    <img src={data.img} alt="" />
    <div className="postREact">
        <img src={data.liked?like:unlike} alt="" className='icon' />
        <img src={comment} alt="" className='icon'/>
        <img src={shere} alt="" className='icon'/>
    </div>
    <span style={{color:'var(--gray)',fontSize:'13px'}} >{data.likes}likes</span>
    <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc} </span>
    </div>
   </div>
  )
}

export default Post