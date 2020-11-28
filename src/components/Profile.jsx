import React from "react";
import aaaa from "../img/head-img.jpg";


const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img src={aaaa}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;