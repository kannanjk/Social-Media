import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './ProfileCard.scss'

function ProfileCard({ location }) {

    const { user } = useSelector((state) => state.authReducer.authData)
    const posts = useSelector((state)=>state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    
    return (
         <div className="con">
        <div className="profileCard">
            <div className="profileImages">
              <img src={user.coverpicture  
                    ? serverPublic + user.coverpicture 
                    : serverPublic + "defaultCover.png"} alt="" style={{ width: '100%', height: '180px' }} />
                <img src={user.profilePicture 
                    ? serverPublic + user.profilePicture 
                    : serverPublic + "profile.png"} alt="" />
            </div>
            <div className="profileName">
                <span>{user.firstname} {user.lastname} </span>
                <span>{user.workAt ? user.workAt : "Write about your selfe"}</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span> {user.following.length} </span>
                        <span>Following</span>
                    </div>
                    <div className="vl"> </div>
                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>

                    {location === 'profilePage' && (
                        <>
                            <div className="vl">
                            </div>
                            <div className="follow">
                                <span> {posts.filter((post)=>post.userId === user._id).length} </span>
                                <span>Posts</span>
                            </div>
                        </>
                    )
                    }

                </div>
                <hr />
            </div>
            {location === 'profilePage' ? (
                ''
            ) : (<span>
                <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }} >My Profile</Link>
            </span>
            )}
        </div>
         </div>
    )
}

export default ProfileCard