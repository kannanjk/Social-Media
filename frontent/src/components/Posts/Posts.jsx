import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../Post/Post'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"
import { getTimeLinePosts } from '../../Actions/PostAction'

function Posts() {
  const params = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer)

   useEffect(() => {
    dispatch(getTimeLinePosts(user._id))
  }, []) 

  if (!posts) return "no posts"
  if (params.id) posts = posts.filter((post) => post.userId === params.id)
  return (
    <div className="posts">
      {loading 
        ? "Fetching Posts...."
        : posts.map((post, id) => {
          return <Post data={post} key={id} />
        })}
    </div>
  )
}

export default Posts