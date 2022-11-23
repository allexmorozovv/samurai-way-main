import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer newPostText={props.newPostText}
                              posts={props.posts}
                              dispatch={props.dispatch}
            />
        </div>
    )
}