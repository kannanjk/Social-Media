import React from 'react'
import './Posts.css'
import { postData } from '../../Data/PostData'
import Post from '../Post/Post'

function Posts() {
  return (
   <div className="posts">
    {
        postData.map((post,id)=>{
            return <Post data={post} id={id} />
        })
    }
   </div>
  )
}

export default Posts