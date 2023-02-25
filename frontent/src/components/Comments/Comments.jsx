import React from 'react'
import './Comments.scss'

function Comments() {
  const comments = [
    {
      id: 1,
      desc: " generate placeholder text to insert it in whatever software/webapp you want. See below for details.",
      name: "manu",
      userId: "1",
      proPic: "http://3.bp.blogspot.com/-nZ3evGgpgh0/TyfamKNtrRI/AAAAAAAACQM/_e2PX6BU04k/s1600/Tamanna+hot+in+black+chudithar+at+Badrinath+function+8.jpg"
    },
    {
      id: 1,
      desc: " generate placeholder text to insert it in whatever software/webapp you want. See below for details.",
      name: "manu",
      userId: "1",
      proPic: "https://tse1.mm.bing.net/th?id=OIP.IEaJCgCUqmEYVRNc_6p-UQHaLI&pid=Api&P=0"
    }
  ]
  return (
    <div className="comments">
      <div className="write">
        <img src='http://2.bp.blogspot.com/-k_yEBWhHtg0/UqXwmN-CQLI/AAAAAAAAsa8/Wbi_OVNp6U8/s1600/Tamanna++in+Dark+Pink+Saree_ActressQ_009.jpg' alt="" />
      <input type="text" placeholder='Write a comment' />
      <button>Sent</button>
      </div>
      {
        comments.map(comment => (
          <div className="comment">
            <img src={comment.proPic} alt="" />
            <div className="info">
              <span> {comment.name} </span>
              <p> {comment.desc} </p>
              <span className='date' >1 hour ago</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}


export default Comments