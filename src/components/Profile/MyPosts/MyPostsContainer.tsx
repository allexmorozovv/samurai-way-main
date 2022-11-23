import React from "react";
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