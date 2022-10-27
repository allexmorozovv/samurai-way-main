import React, {FC} from "react";
import s from "./../Dialogs.module.css"
import {MessageType} from "../../../Redux/state";


export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>

            {/*{props.message}*/}
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add message</button>
            </div>

        </div>

    )
}

