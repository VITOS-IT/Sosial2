import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
return(
    <header className={s.header}>
        <img alt={'ava'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png'}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
);
}

export default Header