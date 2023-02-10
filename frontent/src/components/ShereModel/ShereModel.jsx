import { useState } from 'react';
import { Modal, Button, Group, useMantineTheme } from '@mantine/core';
import PostShere from '../PostShere/PostShere';

function ShereModel({ modalOpened, setModalOpened }) {
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
               <PostShere/>
            </Modal>   
        </>   
    );
}

export default ShereModel