import React, { useState } from 'react'
import './Post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import like from '../../image/like.png'
import unlike from '../../image/unlike.png'
import shere from '../../image/shere.png'
import comment from '../../image/comment.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../Api/PostRequest'
import Dropdown from '../Dropdown/Dropdown';
import Comments from '../Comments/Comments';



function Post({ data }) {
  // console.log(data)
  const { user } = useSelector((state) => state.authReducer.authData)

  const [modalOpened, setModalOpened] = useState(false)
  const [commentOpen, setCommentOpen] = useState(false)

  const [commentd, setcomment] = useState(data.comments.length)

  
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  const handleLikes = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  };


  // const postDelete = () => {
  //   swal({
  //     title: 'Are you sure?',
  //     text: 'Once deleted, you will not be able to recover this imaginary file!',
  //     icon: 'warning',
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete)=>{
  //     if(willDelete){
  //       deletePost(data._id, user._id);
  //       swal('Poof! Your imaginary file has been deleted!', {
  //         icon: 'success',
  //       });
  //     }else{
  //       swal('Your imaginary file is safe!');
  //     }
  //   })
  // }

  return (
    <div className="post">
      <div className='kannan'>
        <MoreHorizIcon
          onClick={() => setModalOpened(true)}
        />
        <Dropdown
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          data={data}
        />
      </div>
      <div className="details">
        <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : null} alt="" />
        <span className='name' > kannan </span>
        <span className='name' >1 min ago</span>
      </div>
      <span style={{ marginLeft: "5%" }}> {data.desc} </span>
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : null} alt="" />
      <div className="postREact">
        <img src={liked ? like : unlike} onClick={handleLikes} alt="" className='icon' style={{ cursor: "pointer" }} />
        <img onClick={() => setCommentOpen(!commentOpen)} src={comment} alt="" className='icon' style={{ cursor: "pointer" }} />

        <img src={shere} alt="" className='icon' style={{ cursor: "pointer" }} />
      </div>
      <div >
      <span style={{ color: 'var(--gray)', fontSize: '13px' }}  >{likes} likes</span>
      <span  style={{ color: 'var(--gray)', marginLeft:"1%",fontSize: '13px' }}  > {commentd} comments</span>
      <span  style={{ color: 'var(--gray)', marginLeft:"1%",fontSize: '13px' }}  > {data.comments.length} Share</span>
      </div>
      <div className="detail">
        <span><b>{data.name}</b></span>
        {commentOpen && <Comments data={data} key={user._id} />}
      </div>
    </div>
  )
}

export default Post
