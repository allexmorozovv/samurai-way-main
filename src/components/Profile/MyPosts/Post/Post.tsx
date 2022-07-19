import React from "react";
import s from './Post.module.css'

export const Post = () => {
    return (

        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/i?id=4f418cb01d7c469b27269f9ad70e511f-5236846-images-thumbs&n=13"
                 alt="ava"/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}