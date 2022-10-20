import React, {FC} from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItemPropsType} from "../../../Redux/state";
// import {DialogItemPropsType} from "../../../App";

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img
                src={"https://avatars.mds.yandex.net/i?id=c3cdd1f86d95a7c4c7404735bcce04c0-6559966-images-thumbs&n=13"}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


