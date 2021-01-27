import React from 'react'
import {createField, Input, Textarea} from "../../Common/FormsControl/formsControl";
import s from './ProfileInfo.module.css'
import style from '../../Common/FormsControl/formControl.module.css'

import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit }>
        <div><button>Save</button></div>
        {error && <div className={style.formSummaryError}>
            <span>{error}</span>
        </div>}
        <div>
            <b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills:</b>
            {createField('My professional skills','lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me:</b>
            {createField('About Me','aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts--- </b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact}>
                    <b>{key}: {createField(key,'contacts.'+key,[],Input)}</b>
                </div>
            })}
        </div>
    </form>
}

export const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)