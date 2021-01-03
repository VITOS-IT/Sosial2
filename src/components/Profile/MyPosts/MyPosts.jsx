import React from "react";

import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {


    let addPost = (values) => {
        props.onAddPost(values.postBody);
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addPost}/>
            <div>
                {props.postData.map(u => <Post message={u.message} likesCount={u.likesCount} key={u.id}/>)}
            </div>
        </div>

    );
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'postBody'} component={'textarea'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}
AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);
export default MyPosts;