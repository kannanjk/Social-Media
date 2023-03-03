import React, { useEffect, useState } from 'react'
import './Chat.css'
import Logosearch from '../../components/LogoSearch/LogoSearch'
import { useSelector } from "react-redux"
import { UserChats } from '../../Api/ChatRequest'
import Conversation from '../../components/Conversation/Conversation'
import { Link } from 'react-router-dom'
import home from '../../image/home.png'
import note from '../../image/note.png'
import comment from '../../image/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import ChatBox from '../../components/ChatBox/ChatBox'

function Chat() {

    const { user } = useSelector((state) => state.authReducer.authData)

    const [chats, setChats] = useState([])

    const [currentChat, setCurrentChat] = useState(null)

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

    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat ">
                <Logosearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                            <div onClick={() => setCurrentChat(chat)} >
                                <Conversation data={chat} currentUserId={user._id} />
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
                        <UilSetting />
                        <img src={note} alt="" />
                        <Link to='../chat' >
                            <img src={comment} alt="" />
                        </Link>
                    </div>
                </div>
                {/* Chat body */}
                <ChatBox chat={currentChat} currentUser={user._id} />

            </div>
        </div>
    )
}

export default Chat