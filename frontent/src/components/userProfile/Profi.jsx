import { Modal, useMantineTheme } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const API = axios.create({ baseURL: "http://localhost:5000" })


function Profi({ modalOpened, setModalOpened, person }) {
    // console.log(msg);
    const { user } = useSelector((state) => state.authReducer.authData)
    const [msg, setMsg] = useState([])
    const theme = useMantineTheme();
    const ji = msg.chat
    const navigate = useNavigate()
    // console.log(person);

    useEffect(() => {
        const findmsg = async () => {
            try {
                const res = await API.get(`/chat/find/${person._id}/${user._id}`)
                setMsg(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        findmsg()
      
    },)

    const startMsg = async () => {
        try {
            const obj={
                senderId: user._id,
                receiverId:person._id
            }
            const newmsg = await API.post(`/chat` ,obj)
            setMsg(newmsg.data)
            navigate('/chat')
        } catch (error) {
            console.log(error)
        }
    }

    const findpost =async()=>{
        try {
            const post = await API.get(`/post/getpost/${person._id}`)
            console.log(post);
        } catch (error) {
            
        }
    }

    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
            title='Profile info'
        >
            <h1 > {person.firstname} </h1>
            {
                ji ? null :  <button className='button ps-button ' onClick={()=>startMsg()} style={{marginLeft:'500px',marginTop:"-25px"}}>Start Message</button>

            }
            <button onClick={()=>findpost()}>show post </button>
        </Modal>
    )
}

export default Profi