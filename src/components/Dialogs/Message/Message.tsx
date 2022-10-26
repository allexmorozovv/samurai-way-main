import React, {FC} from "react";
import s from "./../Dialogs.module.css"
import {MessagePropsType} from "../../../Redux/state";


export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>

            {/*{props.message}*/}
            <div>
                <textarea></textarea>
            </div>
            <div><button>add message</button></div>

        </div>

    )
}

