import React from 'react'
import Posts from '../Posts/Posts'
import PostShere from '../PostShere/PostShere'
import './PostSide.css'

function PostSide() {
  return (
    <div className="PostSide">
        <PostShere/>
        <Posts/>
    </div>
  )
}

export default PostSide