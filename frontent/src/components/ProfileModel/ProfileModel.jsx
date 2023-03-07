import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../Actions/UploadAction';
import { updateuser } from '../../Actions/UserAction';
import './ProfileModel.css'

function ProfileModel({ modalOpened, setModalOpened, data }) {
    const theme = useMantineTheme();
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch();
    const param = useParams();

    const { user } = useSelector((state) => state.authReducer.authData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            event.target.name === "profileImage"
                ? setProfileImage(img)
                : setCoverImage(img);
        }
    };

    // form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let UserData = formData;
        if (profileImage) {
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profilePicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            UserData.coverpicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        dispatch(updateuser(param.id, UserData));
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
                title='Introduce yourself!'
            >
                <form className="infoform"  onSubmit={handleSubmit} >
                    <h3>Your info</h3>
                    <div>
                        <input type="text"
                            name='firstname' className="infoinput"
                            placeholder='First Name'
                            onChange={handleChange}
                            value={formData.firstname} />
                        <input type="text"
                            name='lastname' className="infoinput"
                            placeholder='Last Name'
                            onChange={handleChange}
                            value={formData.lastname} />
                    </div>
                    <div>
                        <input type="text"
                            name='workAt' className="infoinput"
                            placeholder='Work at'
                            onChange={handleChange}
                            value={formData.workAt} />
                    </div>
                    <div>
                        <input type="text"
                            name='livesin' className="infoinput"
                            placeholder='Live in'
                            onChange={handleChange}
                            value={formData.livesin} />
                        <input type="text"
                            name='country' className="infoinput"
                            placeholder='Country'
                            onChange={handleChange}
                            value={formData.country} />
                    </div>
                    <div>
                        <input type="text" className="infoinput"
                            name='relationShip'
                            placeholder='RelationShip status'
                            onChange={handleChange}
                            value={formData.relationShip} />
                    </div>
                    <div>
                        Profile Image
                        <input type="file" name='profileImage' onChange={onImageChange} />
                        Cover Image
                        <input type="file" name='coverImage'   onChange={onImageChange} />
                    </div>
                    <button  type='submit' className="button infobutton" >Update</button>
                </form>
            </Modal>
        </>
    );
}

export default ProfileModel