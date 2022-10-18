import React, {FC} from "react";
import s from "./../Dialogs.module.css"
import {MessagePropsType} from "../../../App";

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>

            {props.message}</div>
    )
}

