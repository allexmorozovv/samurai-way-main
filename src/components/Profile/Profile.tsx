import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=f3cbcf844cde6bba8a50f5de3f21feea-2924668-images-thumbs&n=13"/>
            </div>
            <div>
                ava + description
            </div>

           <MyPosts/>
        </div>
    )
}