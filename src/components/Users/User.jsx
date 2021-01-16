import React from 'react'
import s from './users.module.css'
import altImg from '../../img/altAvatar.jpg'
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";


let User = ({user,key, followingInProgress, unfollow, follow}) => {
    return (
        <div key={key} className={s.userContainer}>
                <div className={s.userFollowBlock}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small || altImg} alt="avatar" className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {unfollow(user.id);}} className={s.btnFollow}>
                                Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {follow(user.id)
                            }} className={s.btnFollow}>Follow</button>}

                    </div>
                </div>
                <div className={s.userInfoBlock}>
                    <div className={s.userInfoLeft}>
                        <div>Name: {user.name}  </div>
                        <div>Status: {user.status}  </div>
                    </div>
                    <div className={s.userInfoRight}>
                        <div>Country:</div>
                        <div>id: {user.id}  </div>
                    </div>
                </div>
            </div>)


}


export default User;