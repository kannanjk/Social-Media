import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from '../../Api/UserRequest'

function Conversation({ data, currentUserId, online }) {

    const [userData, setUserData] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
                dispatch({type:"SAVE_USER",data:data})
            }
            catch (er) {
                console.log(er)
            }
        }
        getUserData()
    }, [])
    return (
        <>
            <div className="follower conversation">
                <div>
                    {online && <div className="online-dot"></div>}
                    <img
                        src={userData?.profilePicture 
                            ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture 
                            : process.env.REACT_APP_PUBLIC_FOLDER + 'profile.png'} alt=""
                        className='followerImage'
                        style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                    />
                    <div className="name" style={{ fontSize: "0.8rem" }} >
                        <span>{userData?.firstname}{userData?.lastname} </span>
                        <span style={{color: online?"#51e200":""}} > {online ? "Online" : "Offline"} </span>
                    </div>
                </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </>
    )
}

export default Conversation