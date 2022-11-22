import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType} from "../../redux/state";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";


export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

    const sendMessageHandler = () => {
        props.dispatch(sendNewMessageTextAC())
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={props.newMessageText}
                            placeholder={'Enter your message'}
                            onChange={onChangeMessageHandler}
                        />
                    </div>
                    <div>
                        <button onClick={sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}