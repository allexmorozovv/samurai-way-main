import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfileMessagesType} from "../../../redux/store";


 type MyPostsType = {
    profilePage:ProfileMessagesType
    addPost: () => void
    onPostChange: (newText: string) => void
}


export const MyPosts = (props:MyPostsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPostHandler = () => {
        props.addPost()
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChangeHandler} value={props.profilePage.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPostHandler}>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}