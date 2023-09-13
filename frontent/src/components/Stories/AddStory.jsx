import { Modal, useMantineTheme } from '@mantine/core'
import React, { useRef, useState } from 'react'
import { UilTimes } from '@iconscout/react-unicons'
import {  useSelector } from 'react-redux'
import { message } from 'antd'
import axios from "axios";
 


function AddStory({ modalOpened, setModalOpened }) {
    
    const { user } = useSelector((state) => state.authReducer.authData)
    const loading = useSelector((state) => state.postReducer.uploading)
    
    const API = axios.create({baseURL:"http://localhost:5000"})
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const theme = useMantineTheme();
    const desc = useRef()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage(img)
        } 
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (image) {
            const data = new FormData()
            const filename = Date.now() + image.name
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename
            console.log(newPost);
            try {
                const res = await API.post('/story',data)
                if (res.data.success) {
                    message.success(res.data.message)
                }else{
                    message.error("error")
                }
            } catch (error) {
                console.log(error);
                message.error("sonething went error")
            }
        }
        const res = await API.post('/story/addStory',newPost)
      if (res.data.success) {
        message.success(res.data.message)
      }else{
        message.error("error")
    }
    setModalOpened(false)
}
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
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title='Add your Story!'
            >

                <div>
                    <input type="file" required
                        name='myImage' ref={imageRef}
                        onChange={onImageChange}
                    />
                </div>
                <div>
                    <button className='button ps-button'
                        onClick={handleSubmit}
                        disabled={loading}
                    >  {loading ? "Posting..." : "Share"}
                    </button>
                </div>
                <div>
                    {
                        image && (
                            <div className="previewImage">
                                <UilTimes onClick={() => setImage(null)} />
                                <img src={URL.createObjectURL(image)} alt="" />
                            </div>
                        )
                    }
                    <input
                    ref={desc}
                    required
                    type="text"
                    placeholder="what's happening " />
                </div>
            </Modal>
        </>
    )
}

export default AddStory