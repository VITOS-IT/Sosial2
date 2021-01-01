import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) =>{
    let newMessageElement = React.createRef();

    let onAddMessage = () =>{
        props.addMessage();
    }
    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    }

    if (!props.isAuth){return <Redirect to='/login'/>}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsData.map(u=><DialogItem name={u.name} id={u.id} key={u.id}/>)}
            </div>
            <div className={s.messages}>
                <div><textarea ref={newMessageElement} onChange={onMessageChange}
                               value={props.newMessageText}></textarea></div>
                <div><button onClick={onAddMessage}>Add message</button></div>
                {props.messages.map(u=><Message message={u.message} key={u.id}/>)}

            </div>
        </div>
    )
}

export default Dialogs