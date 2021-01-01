import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return{
        dialogsData: state.dialogPage.dialogsData,
        newMessageText: state.dialogPage.newMessageText,
        messages:state.dialogPage.messages,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        onMessageChange: (text)=>{
            dispatch(updateNewMessageActionCreator(text));
        },
        addMessage: ()=> {
           dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;