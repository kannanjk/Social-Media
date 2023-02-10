import { useState } from 'react';
import { Modal, Button, Group, useMantineTheme } from '@mantine/core';

function ProfileModel({ modalOpened, setModalOpened }) {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme()

    return (
        <>
            <Modal
                overlayColor={
                    theme.colorScheme === "dark" ?
                        theme.colors.dark[9] :
                        theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                size='55%'
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title="Introduce yourself!"
            >
                <form className="infoform">
                    <h3>Your info</h3>
                    <div>
                        <input type="text"
                            name='firstname' className="infoinput"
                            placeholder='First Name' />
                        <input type="text"
                            name='lastname' className="infoinput"
                            placeholder='Last Name' />
                    </div>
                    <div>
                        <input type="text"
                            name='workAt' className="infoinput"
                            placeholder='Work at' />
                    </div>
                    <div>
                        <input type="text"
                            name='livein' className="infoinput"
                            placeholder='Live in' />
                        <input type="text"
                            name='country' className="infoinput"
                            placeholder='Country' />
                    </div>
                    <div>
                        <input type="text" className="infoinput" 
                        placeholder='RelationShip status'
                        />
                    </div>
                    <div>
                    Profile Image
                    <input type="file" name='profileImg' />
                    Cover Image 
                    <input type="file" name='coverImg' />
                    </div>
                    <button className="button infobutton">Update</button>
                </form>
            </Modal>   
        </>   
    );
}

export default ProfileModel