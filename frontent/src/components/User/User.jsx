import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../Actions/UserAction'
import UserProfile from '../userProfile/UserProfile'

function User({ person }) {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(
        person.followers.includes(user._id)
    )
    const [modalOpened, setModalOpened] = useState(false)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const handlefollow = () => {
        following ?
            dispatch(unfollowUser(person._id, user)) :
            dispatch(followUser(person._id, user))

        setFollowing((prev) => !prev)
    }

    return (
        <div className="follower">
            <div>
                <img src={
                    person.profilePicture
                        ? serverPublic + person.profilePicture
                        : serverPublic + "profile.png"}
                    alt="" onClick={()=>setModalOpened(true)}
                    className='followerImg' />
                <UserProfile 
                modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                    person={person}
                    key={user._id}
                />
                <div className="name">
                    <span>{person.firstname}</span>
                    {/* <span>{person.username}</span> */}
                </div>
            </div>
            <button className={following ? "button fc-button unfollowButton" : "button fc-button"} onClick={handlefollow} >
                {following ? "unfollow" : "Follow"}
            </button>
        </div>
    )
}

export default User