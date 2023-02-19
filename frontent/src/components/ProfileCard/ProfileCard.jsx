import React from 'react'
import profile from '../../image/reshu.png'
import cover from '../../image/nature.jpg'
import './ProfileCard.scss'

function ProfileCard() {
    const profilePage = false
    return (
        <div className="con">
        <div className="profileCard">
            <div className="profileImages">
                <img src={cover} alt="" style={{ width: '100%', height: '180px' }} />
                <img src={profile} alt="" />
            </div>
            <div className="profileName">
                <span>Reshmika</span>
                <span>Senior WEB developer</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>7,485</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"> </div>
                    <div className="follow">
                        <span>3</span>
                        <span>Followers</span>
                    </div>

                    {profilePage && (
                        <>
                            <div className="vl">

                            </div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>

                        </>
                    )
                    }

                </div>
                <hr />
            </div>
            {
                profilePage ? '' : <span>My Profile</span>
            }
        </div>
        </div>
    )
}

export default ProfileCard