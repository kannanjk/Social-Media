import { Modal, useMantineTheme } from '@mantine/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Friends from './Friends';
// import { io } from 'socket.io-client';
const API = axios.create({ baseURL: "http://localhost:5000" })

function SharePost({ shareOpen, setShareOpen, data }) {
    const { user } = useSelector((state) => state.authReducer.authData)
    const theme = useMantineTheme();
    const [chats, setChats] = useState([])
    // const [onlineUsers, setOnlineUsers] = useState([])
    // const socket = useRef()

    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await API.get(`/chat/${user._id}`)
                setChats(data)
            } catch (error) {
                console.log(error)
            }
        }
        getChats()
    }, [user])

    // useEffect(() => {
    //     socket.current = io('http://localhost:8800')
    //     socket.current.emit("new-user-add", user._id)
    //     socket.current.on('get-users', (users) => {
    //         setOnlineUsers(users)
    //     })
    // }, [user])

    return (
        <>
            <Modal
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                size='55%'
                opened={shareOpen}
                onClose={() => setShareOpen(false)}
                title='Share to friends!'
            >
                <div>
                    <h3 style={{ textAlign: "center" }}>Friends</h3>
                    {
                        chats.map((chat) => (
                            <Friends
                                data={chat}
                                currentUserId={user._id} />
                        ))
                    }

                </div>
            </Modal>
        </>
    )
}

export default SharePost