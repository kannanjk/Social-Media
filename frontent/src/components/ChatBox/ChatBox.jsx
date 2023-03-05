import React, { useEffect, useRef, useState } from 'react'
import { addMessage, getMessages } from '../../Api/MessageRequests'
import { getUser } from '../../Api/UserRequest'
import './ChatBox.css'
import { format } from 'timeago.js'
import InputEmoji from 'react-input-emoji'

function ChatBox({ chat, currentUser, setSendMessage, receiveMessage }) {

    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessages] = useState('')

    const handleChange = (newMessage) => {
        setNewMessages(newMessage)
    }

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
                setMessages(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (chat !== null) fetchMessages()
    }, [chat])

    // Always scroll to last message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Send message to database
    const handleSend = async (e) => {
        e.preventDefault()
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
        }
        const receiverId = chat.members.find((id) => id !== currentUser)
        // send message to Socket server
        setSendMessage({ ...message, receiverId })
        // Sent Message to dataBase
        try {
            const { data } = await addMessage(message)
            setMessages([...messages, data])
            setNewMessages("")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
            setMessages([...messages, receiveMessage])
        }
    }, [receiveMessage])


    const scroll = useRef()
    const imageRef = useRef()


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
                            {messages.map((messag) => (
                                <>
                                    <div ref={scroll}
                                        className={messag.senderId === currentUser
                                            ? "message own"
                                            : "message"} >
                                        <span> {messag.text} </span>
                                        <span>{format(messag.createdAt)} </span>
                                    </div>
                                </>
                            ))}
                        </div>
                        {/* Chat-senter */}
                        <div className="chat-sender">
                            <div onClick={() => imageRef.current.click()} >+</div>
                            <InputEmoji
                                value={newMessage}
                                onChange={handleChange}
                            />
                            <div className="sent-button button" onClick={handleSend} >Sent</div>
                            <input
                                type="file"
                                name=""
                                id=""
                                style={{ display: "none" }}
                                ref={imageRef}
                            />
                        </div>{" "}
                    </>
                ) : (
                    <span className="chatbox-empty-message">
                        Tap on a Chat start Conversation...
                    </span>
                    
                )}
            </div>
        </>
    )
}

export default ChatBox

