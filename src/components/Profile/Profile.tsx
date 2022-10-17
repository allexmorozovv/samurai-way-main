import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type PostType ={
    id:number
    message:string
    likesCount:number
}
export type PostsPropsType={
    posts:Array<PostType>
}

export const Profile:React.FC<PostsPropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}