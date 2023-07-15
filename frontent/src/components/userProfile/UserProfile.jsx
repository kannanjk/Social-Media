import React, { useEffect, useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import comment from '../../image/comment.png'
import axios, { } from 'axios'
import { useSelector } from 'react-redux';
import Profi from './Profi';


function UserProfile({ modalOpened, setModalOpened, person }) {
   

    return (
       <div>
        <Profi
        modalOpened={modalOpened}
         setModalOpened={setModalOpened}
         person={person}
        //  msg={msg}
        />
       </div>
    )
}

export default UserProfile