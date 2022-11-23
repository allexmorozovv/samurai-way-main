import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType} from "../../redux/store";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = (props: DialogsType) => {

    const sendMessageHandler = () => {
        props.dispatch(sendNewMessageTextAC())
    }

    const onChangeMessageHandler = (newText: string) => {
        props.dispatch(updateNewMessageTextAC(newText))
    }

    return <Dialogs
            dialogs={props.dialogs}
            newMessageText={props.newMessageText}
            messages={props.messages}
            sendMessage={sendMessageHandler}
            updateNewMessageText={onChangeMessageHandler}/>
}