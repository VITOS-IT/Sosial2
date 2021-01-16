import React from 'react'
import s from './Paginator.module.css'


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.usersPage}>
        {pages.map(u => {
            return <span className={currentPage === u && s.selectedPage || s.notSelectedPage}
                // key={u}
                         onClick={() => {
                             onPageChanged(u);
                         }}>{u}</span>
        })}
    </div>
}

export default Paginator;