import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/store";

/*export type ProfileType={
    addPost:(postMessage: string)=>void
    posts:Array<PostType>
}*/

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts newPostText={props.newPostText}
                     posts={props.posts}
                     dispatch={props.dispatch}
            />
        </div>
    )
}