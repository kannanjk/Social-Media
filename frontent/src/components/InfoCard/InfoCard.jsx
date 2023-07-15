import React, { useEffect, useState } from 'react'
import './InfoCard.scss'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../Api/UserRequest.js'
import { logOut } from '../../Actions/AuthAction'
 
function InfoCard() {

    const dispatch = useDispatch()
    const params = useParams() 
    const [modalOpened, setModalOpened] = useState(false)
    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const { user } = useSelector((state) => state.authReducer.authData)

    const handleLogout = () => {
        dispatch(logOut())
    }

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
            } else {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser()
    }, [user]) 

  
    return (
         <div className="con">
         <div className="InfoCard">
            <div className="infoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (  
                    <div>
                        <UilPen
                            width='2rem'
                            height='2rem'
                            onClick={() => setModalOpened(true)} />
                        <ProfileModel
                            modalOpened={modalOpened}
                            setModalOpened={setModalOpened}
                            data={user}
                        />
                    </div>
                ) : (null)}

            </div>
            <div className="info">
                <span>
                    <b>Status in </b>
                </span>
                <span> {profileUser.relationShip} </span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in</b>
                </span>
                <span> {profileUser.livesin} </span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span> {profileUser.workAt} </span>
            </div>
            <button className='button  ' onClick={handleLogout} >Logout</button>
        </div>
         </div>
    )
}

export default InfoCard