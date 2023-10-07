import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux"
import { UserChats } from '../../Api/ChatRequest'
import { io } from 'socket.io-client'
import { Link } from 'react-router-dom'
import { UilSetting } from '@iconscout/react-unicons'
import Logosearch from '../../components/LogoSearch/LogoSearch'
import Conversation from '../../components/Conversation/Conversation'
import home from '../../image/home.png'
import note from '../../image/note.png'
import comment from '../../image/comment.png'
import ChatBox from '../../components/ChatBox/ChatBox'
import './Chat.css'

function Chat() {

    const socket = useRef()

    const { user } = useSelector((state) => state.authReducer.authData)

    const [chats, setChats] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [sendMessage, setSendMessage] = useState(null)
    const [receiveMessage, setReceiveMessage] = useState(null)

    // get chat in chat section
    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await UserChats(user._id)
                setChats(data)
            } catch (error) {
                console.log(error)
            }
        }
        getChats()
    }, [user])

    // Connect to Socket
    useEffect(() => {
        socket.current = io('http://localhost:8800')
        socket.current.emit("new-user-add", user._id)
        socket.current.on('get-users', (users) => {
            setOnlineUsers(users)
        })
    }, [user])

    // Send message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit('send-message', sendMessage)
        }
    }, [sendMessage])

    // Receive Message from socket server
    useEffect(() => {
        socket.current.on("receive-message", (data) => {
            setReceiveMessage(data)
        })
    }, [])

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== user._id)
        const online = onlineUsers.find((user) => user.userId === chatMember)
        return online ? true : false
    }

    return (
        <div className="cont">
            <div className="Chat">
                {/* Left Side */}
                <div className="Left-side-chat ">
                    <Logosearch /> 
                    <div className="Chat-container">
                        <h2>Chats</h2>
                        <div className="Chat-list">
                            {chats.map((chat) => (
                                <div
                                    onClick={() => {
                                        setCurrentChat(chat)
                                    }} >
                                    <Conversation
                                        data={chat}
                                        currentUserId={user._id}
                                        online={checkOnlineStatus(chat)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="Right-side-chat ">
                    <div style={{ width: "20rem", alignSelf: "flex-end" }} >
                        <div className="navIcon">
                            <Link to='../home' >
                                <img src={home} alt="" />
                            </Link>
                            <Link to='../setings'>
                                <UilSetting />
                            </Link>
                            <img src={note} alt="" />
                            <Link to='../chat' >
                                <img src={comment} alt="" />
                            </Link>
                        </div>
                    </div>
                    {/* Chat body */}
                    <ChatBox
                        chat={currentChat}
                        currentUser={user._id}
                        setSendMessage={setSendMessage}
                        receiveMessage={receiveMessage}
                    />

                </div>
            </div>
        </div>
    )
}

export default Chat