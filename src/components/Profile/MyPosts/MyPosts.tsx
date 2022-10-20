import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../Redux/state";


export const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)



    return (
        <div className={s.content}>

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>

                    <div>
                        <textarea ></textarea>
                    </div>
                    <div>
                        <button >Add post</button>
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