import React from 'react'

function User({person}) {
    return (
        <div className="follower">
            <div>
                <img src={person.img} alt=""
                    className='followerImg' />
                <div className="name">
                    <span>{person.name}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className='button fc-button' >
                follow
            </button>
        </div>
    )
}

export default User