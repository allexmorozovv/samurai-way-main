import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfileType} from "../../../redux/store";
import {addPostAC, updateNewPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = (props: ProfileType) => {

    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    const onPostChangeHandler = (newText: string) => {
        props.dispatch(updateNewPostAC(newText))
    }

    return (
        <MyPosts newPostText={props.newPostText}
                 posts={props.posts}
                 addPost={addPostHandler}
                 onPostChange={onPostChangeHandler}/>
    )
}