import React, {FC} from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

type MessagePropsType = {
    message: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Alex"} id={"1"}/>
                <DialogItem name={"Kris"} id={"2"}/>
                <DialogItem name={"Bob"} id={"3"}/>
                <DialogItem name={"Tom"} id={"4"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
                <Message message={"Yo!"}/>
                <Message message={"Yo!"}/>
            </div>
        </div>
    )
}