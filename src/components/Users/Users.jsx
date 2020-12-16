import React from 'react'
import s from './users.module.css'
import * as axios from "axios";
import altImg from '../../img/altAvatar.jpg'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];
        for (let i = 1; i<=pagesCount; i++){
            pages.push(i);
        }

        return <div >
            <div className={s.usersPage}>
            {pages.map(u => {
               return <span className={this.props.currentPage === u && s.selectedPage}
                            onClick={(e)=>{this.onPageChanged(u);}}>{u}</span>
            })}
            </div>
            {
                this.props.users.map(u => <div key={u.id} className={s.userContainer}>
                    <div className={s.userFollowBlock}>
                        <div>
                            <img src={u.photos.small || altImg} alt="avatar image" className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }} className={s.btnFollow}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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

}


export default Users;