import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../Redux/state";


export const Post = (props: PostType) => {
    return (

        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/i?id=4f418cb01d7c469b27269f9ad70e511f-5236846-images-thumbs&n=13"
                 alt="ava"/>
            {props.message}
            <div>
                <span> like </span> {props.likesCount}
            </div>
        </div>
    )
}