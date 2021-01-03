import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (values) => {
            dispatch(addPostActionCreator(values));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;