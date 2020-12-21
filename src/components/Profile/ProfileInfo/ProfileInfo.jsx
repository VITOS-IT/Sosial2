import React from "react";
import aaaa from "../../../img/head-img.jpg";
import s from './ProfileInfo.module.css'
import altImg from "../../../img/altAvatar.jpg";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={aaaa}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || altImg} alt="avatar image" className={s.avatarPhoto}/>
                <br/>
                My name: {props.profile.fullName} <br/>
                about me: {props.profile.aboutMe}

            </div>
        </div>
    )
}
export default ProfileInfo;