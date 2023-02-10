import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function ProfileModel({modalOpened,setModalOpened}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title="Introduce yourself!"
            >
                <form className="infoform">
                    <h3>Your info</h3>
                </form>
            </Modal>

            {/* <Group position="center">
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
            </Group> */}
        </>
    );
}

export default ProfileModel