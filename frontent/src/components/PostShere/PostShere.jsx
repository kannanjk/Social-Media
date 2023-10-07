import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import proPic from '../../image/reshu.png'
import './PostShere.scss'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../Actions/UploadAction'
import swal from 'sweetalert'

function PostShere() {
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useSelector((state) => state.authReducer.authData)

    const loading = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage(img)
        }
    }
    const desc = useRef()


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
            console.log(newPost)
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
            dispatch(uploadPost(newPost))
            reset()
        } else {
            swal({
                title: 'Select a image ',
                icon: 'warning',
                buttons: true,
                dangerMode: true,
            })
        }

    }
    const reset = () => {
        setImage(null)
        desc.current.value = ""
    }
    return (
        <div className="postShere">
            <Link to={`/profile/${user._id}`}>
                <img src={user.profilePicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "profile.png"} className='img' alt="" />
            </Link>
            <div>
                <input
                    ref={desc}
                    required
                    type="text"
                    placeholder="what's happening " />
                <div className="postOption">
                    <div className="option"
                        style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option"
                        style={{ color: "var(--video)" }}
                    >
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option"
                        style={{ color: "var(--location)" }}
                    >
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="optio"
                        style={{ color: "var(--shedule)" }}
                    >
                        <UilSchedule />
                        Shedule
                    </div>
                    <button className='button ps-button'
                        onClick={handleSubmit}
                        disabled={loading}
                    >  {loading ? "Posting..." : "Share"}
                    </button>
                    <div style={{ display: 'none' }} >
                        <input type="file" required
                            name='myImage' ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>
                {
                    image && (
                        <div className="previewImage">
                            <UilTimes onClick={() => setImage(null)} />
                            <img src={URL.createObjectURL(image)} alt="" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PostShere