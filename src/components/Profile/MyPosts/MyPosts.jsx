import React from "react";

import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/formsControl";


const maxLen10 = maxLengthCreator(10);

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
                <Field validate={[requiredField, maxLen10]}
                       name={'postBody'}
                       component={Textarea}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}
AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);
export default MyPosts;