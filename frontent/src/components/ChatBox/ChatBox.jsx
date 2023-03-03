import React, { useEffect, useState } from 'react'
import { getMessages } from '../../Api/MessageRequests'
import { getUser } from '../../Api/UserRequest'
import './ChatBox.css'
import { format } from 'timeago.js'
import InputEmoji from 'react-input-emoji'

function ChatBox({ chat, currentUser }) {

    const [userData, setUserData] = useState(null)
    const [message, setMessages] = useState([])
    const [newMessage, setNewMessages] = useState('')

    // fetching data for header 
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
            }
            catch (er) {
                console.log(er)
            }
        }
        if (chat !== null) getUserData()
    }, [chat, currentUser])

    // fetching data for messages
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await getMessages(chat._id)
                console.log(data)
                setMessages(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (chat !== null) fetchMessages()
    }, [chat])

    const handleChange = (newMessage) => {
        setNewMessages(newMessage)
    }

    return (
        <>
            <div className="chatBox-container">
                {chat ? (
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
                                    <span> {userData?.firstname}{userData?.lastname} </span>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
                    </div>
                    {/* ChatBox Messagess */}
                    <div className="chat-body">
                        {message.map((messag) => (
                            <>
                                <div className={messag.senderId === currentUser ? "message own" : "message"} >
                                    <span> {messag.text} </span>
                                    <span>{format(messag.createdAt)} </span>
                                </div>
                            </>
                        ))}
                    </div>
                    {/* Chat-senter */}
                    <div className="chat-sender">
                        <div>+</div>
                        <InputEmoji
                            value={newMessage}
                            onChange={handleChange}
                        />
                        <div className="sent-button button">
                            Sent
                        </div>
                    </div>
                </>
                ):(
                    <span className="chatbox-empty-message">
                        Tap on a Chat start Conversation...
                    </span>
                )}
            </div>
        </>
    )
}

export default ChatBox