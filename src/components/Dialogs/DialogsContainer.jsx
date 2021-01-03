import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state)=>{
    return{
        dialogsData: state.dialogPage.dialogsData,
        newMessageText: state.dialogPage.newMessageText,
        messages:state.dialogPage.messages,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);