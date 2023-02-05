import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null

}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    <img
                        src="https://avatars.mds.yandex.net/i?id=f3cbcf844cde6bba8a50f5de3f21feea-2924668-images-thumbs&n=13"/>
                </div>
                <div className={s.descriptionBlock}>
                    {<img src={props.profile?.photos.large}/>}
                </div>
                <div>
                    {props.profile.fullName}
                </div>
            </div>
        )
    }
}