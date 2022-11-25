import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageText: (newText: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const sendMessageHandler = () => {
        props.sendMessage()
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
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
                            value={props.dialogsPage.newMessageText}
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