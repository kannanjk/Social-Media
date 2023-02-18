import React from 'react'
import Posts from '../Posts/Posts'
import PostShere from '../PostShere/PostShere'
import './PostSide.css'
import Stories from '../Stories/Stories'

function PostSide() {
  return (
    <div className="PostSide">
      <Stories/>
        <PostShere/>
        
        <Posts/>
    </div>
  )
}

export default PostSide