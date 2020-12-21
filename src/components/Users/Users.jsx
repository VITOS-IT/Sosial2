import React from 'react'
import s from './users.module.css'
import altImg from '../../img/altAvatar.jpg'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.usersPage}>
            {pages.map(u => {
                return <span className={props.currentPage === u && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(u);
                             }}>{u}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.userContainer}>
                <div className={s.userFollowBlock}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small || altImg} alt="avatar image" className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }} className={s.btnFollow}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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