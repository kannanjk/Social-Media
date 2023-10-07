import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Friends.css'
const API = axios.create({ baseURL: "http://localhost:5000" })

function Friends({ data, currentUserId }) {

    const [userData, setUserData] = useState([])
    // console.log(userData._id);

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        const getUserData = async () => {
            try {
                const { data } = await API.get(`/user/${userId}`)
                setUserData(data)
                // dispatch({type:"SAVE_USER",data:data})
            }
            catch (er) {
                console.log(er)
            }
        }
        getUserData()
    })

    const share = async () => {
        const message = {
            senderId: currentUserId,
            text: `http://localhost:3000/` + data,
            chatId: data._id,
        }
        try {
            await API.post('/message/', message)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='user'>
                <form action="">

                    <img
                        src={userData?.profilePicture
                            ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture
                            : process.env.REACT_APP_PUBLIC_FOLDER + 'profile.png'} alt=""
                        className='followerImage'
                        style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                    />
                    {/* <p> {userData.firstname } </p> */}
                    <span style={{ cursor: "pointer" }}>kannan</span>
                    <button onClick={() => share()} style={{ marginLeft: "50px" }}>Sent</button>
                </form>
            </div>
        </>
    )
}

export default Friends