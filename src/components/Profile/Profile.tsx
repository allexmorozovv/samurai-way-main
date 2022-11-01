import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPropsType} from "../../redux/state";


export const Profile: React.FC<PostsPropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}