import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                {/*<div>*/}
                {/*    <img*/}
                {/*        src="https://avatars.mds.yandex.net/i?id=f3cbcf844cde6bba8a50f5de3f21feea-2924668-images-thumbs&n=13"/>*/}
                {/*</div>*/}
                <div className={s.descriptionBlock}>
                    {<img src={props.profile?.photos.large}/>}
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <div>
                    {props.profile.fullName}
                </div>
            </div>
        )
    }
}