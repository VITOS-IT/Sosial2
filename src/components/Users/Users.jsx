import React from 'react'
import s from './users.module.css'
import altImg from '../../img/altAvatar.jpg'
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div>
        {/*<div className={s.usersPage}>*/}
        {/*    {pages.map(u => {*/}
        {/*        return <span className={currentPage === u && s.selectedPage || s.notSelectedPage}*/}
        {/*            // key={u}*/}
        {/*                     onClick={() => {*/}
        {/*                         props.onPageChanged(u);*/}
        {/*                     }}>{u}</span>*/}
        {/*    })}*/}
        {/*</div>*/}
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {
            props.users.map(u => <div key={u.id} className={s.userContainer}>
                <div className={s.userFollowBlock}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small || altImg} alt="avatar" className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.unfollow(u.id);}} className={s.btnFollow}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)
                            }} className={s.btnFollow}>Follow</button>}

                    </div>
                </div>
                <div className={s.userInfoBlock}>
                    <div className={s.userInfoLeft}>
                        <div>Name: {u.name}  </div>
                        <div>Status: {u.status}  </div>
                    </div>
                    <div className={s.userInfoRight}>
                        <div>Country:</div>
                        <div>id: {u.id}  </div>
                    </div>
                </div>
            </div>)
        }
    </div>
}


export default Users;