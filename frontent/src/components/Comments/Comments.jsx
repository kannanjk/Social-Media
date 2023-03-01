import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createComment } from '../../Api/PostRequest';
import './Comments.scss'

function Comments({ data }) {
  let { posts } = useSelector((state) => state.postReducer)
  const { user } = useSelector((state) => state.authReducer.authData);

  const [comment, setcomment] = useState(data.comments.length)

  const [content, setContent] = useState('')
  // const dispatch = useDispatch()

  const handlesubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) return
    setContent('')


    createComment(data._id, content);
  }

  const comments = [
    {
      id: 1,
      name: "manu",
      userId: "1",
      proPic: "http://3.bp.blogspot.com/-nZ3evGgpgh0/TyfamKNtrRI/AAAAAAAACQM/_e2PX6BU04k/s1600/Tamanna+hot+in+black+chudithar+at+Badrinath+function+8.jpg"
    },
    {
      id: 1,
      name: "manu",
      userId: "1",
      proPic: "https://tse1.mm.bing.net/th?id=OIP.IEaJCgCUqmEYVRNc_6p-UQHaLI&pid=Api&P=0"
    }
  ]
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
      {/* {data.map(comment => ( */}
        <div className="comment">
          {/* <img src={comment.proPic} alt="" /> */}
          <div className="info">
            {/* <span> {comment.comments.length}</span> */}
            {/* <span>{comment.comments}</span> */}

            <span className='date' >1 hour ago</span>
          </div>
        </div>
      {/* ))} */}

    </div>
  )
}


export default Comments