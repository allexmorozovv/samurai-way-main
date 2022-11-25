import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=f3cbcf844cde6bba8a50f5de3f21feea-2924668-images-thumbs&n=13"/>
            </div>
            <div className={s.descriptionBlock}>
            </div>
        </div>
    )
}