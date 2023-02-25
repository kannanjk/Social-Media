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
  const { user } = useSelector((state) => state.authReducer.authData);
  const [modalOpened, setModalOpened] = useState(false)
  const [commentOpen, setCommentOpen] = useState(false)

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
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : null} alt="" />
      <div className="postREact">
        <img src={liked ? like : unlike} onClick={handleLikes} alt="" className='icon' style={{ cursor: "pointer" }} />
        <img onClick={() => setCommentOpen(!commentOpen)} src={comment} alt="" className='icon' style={{ cursor: "pointer" }} />
        <img src={shere} alt="" className='icon' style={{ cursor: "pointer" }} />
      </div>
      <span style={{ color: 'var(--gray)', fontSize: '13px' }}  >{likes} likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc} </span>
        {commentOpen && <Comments/>}
      </div>
    </div>
  )
}

export default Post