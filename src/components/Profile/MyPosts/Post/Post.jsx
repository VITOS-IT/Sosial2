import React from "react";

import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avaImg} src={'https://klike.net/uploads/posts/2019-03/1551511862_28.jpg'} alt={'avatar'}/>
            {props.message}
            <div><span>Like {props.likesCount}</span></div>
        </div>


    );
}

export default Post;