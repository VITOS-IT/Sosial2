import React, {useState} from "react";
import aaaa from "../../../img/head-img.jpg";
import s from './ProfileInfo.module.css'
import altImg from "../../../img/altAvatar.jpg";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {ProfileDataForm, ProfileDataFormReduxForm} from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoselected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) =>{
        saveProfile(formData).then(
            ()=>{
                setEditMode(false)
            }
        );
    }
    return (
        <div>
            <div>
                <img src={aaaa} alt={'fon'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || altImg} alt="avatar" className={s.avatarPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoselected}/>}
                <br/>
                {editMode ?
                    <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile} profile={profile}/> :
                    <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
                My name: {profile.fullName} <br/>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) =>{
    return  <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts--- </b> {
            Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) =>{
return <div className={s.contact}><b>{contactTitle}: </b>{contactValue};</div>
}
export default ProfileInfo;