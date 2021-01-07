import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Form, Field} from 'react-final-form'
import {Textarea} from "../Common/FormsControl/formsControl";
import {composeValidators, maxLengthCreator, requiredField} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let onAddMessage = (formData) => {
        console.log(formData.messageBody);
        props.addMessage(formData.messageBody);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsData.map(u => <DialogItem name={u.name} id={u.id} key={u.id}/>)}
            </div>
            <div className={s.messages}>
                <div>
                    <MessageForm onAddMessage={onAddMessage}/>
                </div>
                {props.messages.map(u => <Message message={u.message} key={u.id}/>)}

            </div>
        </div>
    )
}


const MessageForm = (props) => {
    return (
        <Form
            onSubmit={values => {props.onAddMessage(values);}}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field validate={composeValidators(requiredField, maxLengthCreator(20))}
                               name={'messageBody'}
                               component={Textarea}
                               placeholder={'enter message'}
                        />
                    </div>
                    <div>
                        <button type="submit" >Add message</button>
                    </div>
                </form>
            )}
        />
    )
}
export default Dialogs