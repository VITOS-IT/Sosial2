import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></div>
            <div className={`${s.item} `}>
                <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.active}>Users</NavLink></div>
            <div className={s.item}>
                <NavLink to={'/login'} activeClassName={s.active}>Login</NavLink></div>
            <div className={s.item}><a href={'/'}>Music</a></div>
            <div className={s.item}><a href={'/'}>Settings</a></div>
        </nav>
    );
}

export default Navbar;