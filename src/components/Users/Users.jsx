import React from 'react'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemCount={totalUsersCount} pageSize={pageSize}/>
        {props.users.map(u =><User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                      unfollow={props.unfollow} follow={props.follow} followed={u.followed}/>
            )
        }
    </div>
}
export default Users;