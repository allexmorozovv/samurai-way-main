import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfileType} from "../../../Redux/state";


export const MyPosts = (props: ProfileType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {

            props.addPost()
           props.updateNewPostText('')

    }
    const onPostChangeHandler = () => {
        if (newPostElement.current){
            props.updateNewPostText(newPostElement.current.value)

        }

    }

    return (
        <div className={s.content}>

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>

                    <div>
                        <textarea onChange={onPostChangeHandler} ref={newPostElement}/>
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