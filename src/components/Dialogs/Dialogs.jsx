import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) =>{
    let newMessageElement = React.createRef();

    let addMessage = () =>{
        props.dispatch(addMessageActionCreator(newMessageElement.current.value));
    }
    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));

    }
debugger
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.state.dialogsData.map(u=><DialogItem name={u.name} id={u.id} key={u.id}/>)}
            </div>
            <div className={s.messages}>
                <div><textarea ref={newMessageElement} onChange={onMessageChange}
                               value={props.state.newMessageText}></textarea></div>
                <div><button onClick={addMessage}>Add message</button></div>
                {props.state.messages.map(u=><Message message={u.message} key={u.id}/>)}

            </div>
        </div>
    )
}

export default Dialogs