import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../Post/Post'
import { useSelector, useDispatch } from 'react-redux'
import { getTimeLinePosts } from '../../Actions/PostAction'

function Posts() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  const { posts, loading } = useSelector((state) => state.postReducer)
  useEffect(() => {
    dispatch(getTimeLinePosts(user._id))
  }, [])
  return (
    <div className="posts">
      {loading
        ? "Fetching Posts...." 
        : posts.map((post, id) => {
          return <Post data={post} id={id} />
        })
      }
    </div>
  )
}

export default Posts