import React from "react";

import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () =>{
        props.onAddPost();
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div>
                {props.postData.map(u => <Post message={u.message} likesCount={u.likesCount} key={u.id}/>)}
            </div>
        </div>

    );
}

export default MyPosts;