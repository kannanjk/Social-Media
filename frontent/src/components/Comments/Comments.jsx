import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createComment } from '../../Api/PostRequest';
import './Comments.scss'

function Comments({ data }) {
  let { posts, loading } = useSelector((state) => state.postReducer)
  const [content, setContent] = useState('')
  // const dispatch = useDispatch()

  const handlesubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) return
    setContent('')


    createComment(data._id, content);

  }
  console.log(data.comments._id)


  return (
    <div className="comments">
      <div className="write">
        <img src='https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png' alt="" />
        <input
          type="text"
          placeholder='Write a comment'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type='submit' onClick={handlesubmit} >Sent</button>
      </div>
      <div className="comment">
        <img src={data.proPic} alt="" />
        <div className="info">

        {posts.map((post, id) => {
          // ?return <Post data={post} key={id} />

})}


          <span className='date' >1 hour ago</span>
        </div>
      </div>
      {/* //  ))} */}

    </div>
  )
}


export default Comments