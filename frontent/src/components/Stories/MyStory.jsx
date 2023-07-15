import { Modal, useMantineTheme } from '@mantine/core';
import React from 'react'
import './Stories.scss'

function MyStory({ storyplate, setStoryplate, sto }) {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const storyimg = process.env.REACT_APP_PUBLIC_STORYS
    const theme = useMantineTheme();

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
            opened={storyplate}
            onClose={() => setStoryplate(false)}
            title='Your Storys'
        >
            {
                sto?.map(sto => (

                    <div className="stories">
                            <div className="story" >
                                <img onClick={() => setStoryplate(true)} src={sto.image
                                    ? storyimg + sto.image
                                    : serverPublic + "defaultCover.png"} alt="" style={{ width: '100%', height: '180px' }} />
                                    <h3> {sto.desc} </h3>
                            </div>
                        </div>
                ))
            }
        </Modal>
    )
}

export default MyStory