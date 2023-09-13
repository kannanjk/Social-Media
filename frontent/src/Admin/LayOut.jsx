import React from 'react'
import { adminMenu } from './Data/Data'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Badge } from 'antd'

function LayOut() {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.user)
    const location = useLocation()
  return (
    <div className="main">
    <div className="layout">
        <div className="sidebar">
            <div className="logo">
                <h6>Doc App</h6>
                <hr />
            </div>
            <div className="menu">
                {
                    adminMenu.map(menu => {
                        const isActive = location.pathname === menu.path
                        return (
                            <>
                                <div className={`menu-item ${isActive && `active`}`}>
                                    <i className={menu.icon} ></i>
                                    <Link to={menu.path}> {menu.name} </Link>
                                </div>
                            </>
                        )
                    })
                }

                <div className={`menu-item `} >
                    <i className='fa-solid fa-arrow-right-from-bracket' ></i>
                    <Link to='/login'> Logout </Link>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="header">
                <div className="header-content" style={{ cursor: 'pointer' }}>
                    <Badge
                        count={user && user.notification.length}
                        onClick={() => {
                            navigate('/notification')
                        }}
                    >
                        <i class="fa-solid fa-bell" ></i>
                    </Badge>
                    <Link to={`/profile/${user?._id}`} > {user?.name} </Link>
                </div>
            </div>
            <div className="body"> kannan </div>
        </div>
    </div>
</div>
  )
}

export default LayOut