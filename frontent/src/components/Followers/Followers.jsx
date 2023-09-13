import React, { useEffect, useState } from 'react'
import './Followers.scss'
import User from '../User/User'
import { getAllUser } from '../../Api/UserRequest'
import { useSelector } from 'react-redux';

function Followers() {

  const [persons, setPersons] = useState([])
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser()   
      setPersons(data)
    }
    fetchPersons()
  }, [])
  return (
    <div className="con">
      <div className='followersCard' >
        <h3>People you may know</h3>
        { 
          // eslint-disable-next-line array-callback-return
          persons.map((person, id) => {
            if (person._id !== user._id) {
              return <User person={person} key={id} />
            }
          })
        }
      </div>
    </div>
  )
}

export default Followers