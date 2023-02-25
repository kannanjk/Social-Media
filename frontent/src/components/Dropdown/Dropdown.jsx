import React from 'react'
import './Dropdown.scss'
import { Modal, useMantineTheme } from '@mantine/core';
import { deletePost } from '../../Api/PostRequest';
import swal from 'sweetalert';
import { useSelector } from 'react-redux';


function Dropdown({ modalOpened, setModalOpened, data }) {
    const theme = useMantineTheme();
  const { user } = useSelector((state) => state.authReducer.authData);


    const postDelete = () => {
        swal({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this imaginary file!',
          icon: 'warning',
          buttons: true,
          dangerMode: true,
        }).then((willDelete)=>{
          if(willDelete){
            deletePost(data._id, user._id);
            swal('Poof! Your imaginary file has been deleted!', {
              icon: 'success',
            });
          }else{
            swal('Your imaginary file is safe!');
          }
        })
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
                title='choose one option'
            >
                <div>
                    <button onClick={postDelete} >delete</button>
                </div>
                <div>
                    <button>delete</button>
                </div>
                <div>
                    <button>delete</button>
                </div>
                <div>
                    <button>delete</button>
                </div>


            </Modal>
        </>
    )
}

export default Dropdown