import React from 'react'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {props.users.map(u =><User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                      unfollow={props.unfollow} follow={props.follow}/>
            )
        }
    </div>
}
export default Users;