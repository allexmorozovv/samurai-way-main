import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, ProfileType} from "../../../redux/store";
import {addPostAC, updateNewPostAC} from "../../../redux/profileReducer";

type MyPostsType = {
    addPost: () => void
    posts: Array<PostType>
    newPostText: string
    onPostChange: (newText: string) => void
}


export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPostHandler = () => {
        // props.dispatch(addPostAC())
        props.addPost()
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
        // props.dispatch(updateNewPostAC(e.currentTarget.value))
    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChangeHandler} value={props.newPostText}/>
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