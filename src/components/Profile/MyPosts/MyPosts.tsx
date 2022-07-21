import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>

            <div>
                My posts
                <div>
                    <textarea ></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className='posts'>
                <Post message={"Hi, how are you?"}
                      likeCount={15}
                />
                <Post message={"It's my first post"}
                      likeCount={20}
                />

            </div>
        </div>
    )
}