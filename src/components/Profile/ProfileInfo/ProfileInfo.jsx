import React from "react";
import aaaa from "../../../img/head-img.jpg";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={aaaa}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;