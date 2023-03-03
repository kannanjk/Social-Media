import React, { useEffect, useState } from 'react'
import { getUser } from '../../Api/UserRequest'
import './ChatBox.css'

function ChatBox({ chat, currentUser }) {

    const [userData, setUserData] = useState(null)
    const [message,setMessages]=useState([])

    // fetching data for header 
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
                console.log(data)
            }
            catch (er) {
                console.log(er)
            }
        }
        if (chat !== null) getUserData()
    }, [chat, currentUser])

    // fetching data for messages
    useEffect(()=>{
        const fetchMessages = async ()=>{
            try {
                const {data} = await getMessages(chat._id)
                setMessages(data)
            } catch (error) {
                console.log(error)
            }
        }
        if(chat!== null) fetchMessages()
    },[chat])

    return (
        <>
            <div className="chatBox-container">
                <>
                    <div className="chat-header">
                        <div className="follower">
                            <div>
                                <img src={userData?.profilePicture ? process.env.
                                    REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.
                                        REACT_APP_PUBLIC_FOLDER + 'profile.png'} alt=""
                                    className='followerImage'
                                    style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                                />
                                <div className="name" style={{ fontSize: "0.8rem" }} >
                                    <span> {userData?.firstname} {userData?.lastname} </span>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
                    </div>
                    {/* ChatBox Messagess */}
                    <div className="chat-body">

                    </div>
                </>
            </div>
        </>
    )
}

export default ChatBox