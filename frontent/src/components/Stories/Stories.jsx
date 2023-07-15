import React, { useEffect, useRef, useState } from 'react'
import './Stories.scss'
import { useSelector } from 'react-redux'
import AddStory from './AddStory'
import { message } from 'antd'
import axios, { } from 'axios'
import MyStory from './MyStory'
const API = axios.create({ baseURL: "http://localhost:5000" })

function Stories({ location }) {
    const { user } = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const [modalOpened, setModalOpened] = useState(false)
    const [storyplate, setStoryplate] = useState(false)
    const [story, setStory] = useState([])
    const sto = story.data

    useEffect(() => {
        const story = async () => {
            try {
                const res = await API.get(`/story/${user._id}/getStory`)
                if (res.data.success) {
                    setStory(res.data)
                } else {
                    message.error("error")
                }
            } catch (error) {
                console.log(error);
                message.error("Somthing went Error")
            }
        }
        story()
    })
    const storie = [
        {
            id: 1,
            name: "Jishnu",
            img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/15/Actress-Rashmika-Mandanna-latest-cute-HD-stills-7-scaled.jpg?quality=90&zoom=1&ssl=1"
        },
        {
            id: 2,
            name: "kannan",
            img: "https://1.bp.blogspot.com/-2gUK_72jpeA/Xo8s0xA55BI/AAAAAAAABSI/o0fCqKAo6rsmTQnGCc9tTVZ-zy8AXok4QCLcBGAsYHQ/s1600/Rashmika%2BMandanna%2Bbeautifully%2Bimages.jpg"
        },
        {
            id: 2,
            name: "kannan",
            img: "https://1.bp.blogspot.com/-2gUK_72jpeA/Xo8s0xA55BI/AAAAAAAABSI/o0fCqKAo6rsmTQnGCc9tTVZ-zy8AXok4QCLcBGAsYHQ/s1600/Rashmika%2BMandanna%2Bbeautifully%2Bimages.jpg"
        },
        {
            id: 2,
            name: "kannan",
            img: "https://1.bp.blogspot.com/-2gUK_72jpeA/Xo8s0xA55BI/AAAAAAAABSI/o0fCqKAo6rsmTQnGCc9tTVZ-zy8AXok4QCLcBGAsYHQ/s1600/Rashmika%2BMandanna%2Bbeautifully%2Bimages.jpg"
        },
        {
            id: 2,
            name: "kannan",
            img: "https://1.bp.blogspot.com/-2gUK_72jpeA/Xo8s0xA55BI/AAAAAAAABSI/o0fCqKAo6rsmTQnGCc9tTVZ-zy8AXok4QCLcBGAsYHQ/s1600/Rashmika%2BMandanna%2Bbeautifully%2Bimages.jpg"
        },
        {
            id: 2,
            name: "kannan",
            img: "https://1.bp.blogspot.com/-2gUK_72jpeA/Xo8s0xA55BI/AAAAAAAABSI/o0fCqKAo6rsmTQnGCc9tTVZ-zy8AXok4QCLcBGAsYHQ/s1600/Rashmika%2BMandanna%2Bbeautifully%2Bimages.jpg"
        },
        {
            id: 3,
            name: "salman",
            img: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2018/7/4/original/rashmika-mandanna-.jpg"
        },
        {
            id: 4,
            name: "charu",
            img: "https://www.thetelugufilmnagar.com/wp-content/uploads/2020/03/RASHMIKA.jpg"
        },
    ];
    return (
<>
        <div className="stories">
            <div className="story" >
                <img onClick={() => setStoryplate(true)} src={user.profilePicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "profile.png"} alt="" />
                <span>  {user.firstname} </span>
                     <MyStory
                storyplate={storyplate}
                setStoryplate={setStoryplate}
                sto={sto}
                key={user._id}
            />
                <button onClick={() => setModalOpened(true)}>+</button>
                <AddStory
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                    key={user._id}
                />
            </div>
            {storie.map(stor => (
                <div className="story" key={stor.id} >
                    <img src={stor.img} alt="" />
                    <span> {stor.name}</span>
                </div>
            ))}
        </div>
    
</>
    )
}

export default Stories