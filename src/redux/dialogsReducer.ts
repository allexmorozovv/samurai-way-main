import {ActionTypes, DialogsPageType, MessageType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE_TEXT = "SEND-MESSAGE-TEXT"

export const updateNewMessageTextAC = (newTextBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newTextBody: newTextBody
    } as const
}
export const sendNewMessageTextAC = () => {
    return {
        type: 'SEND-MESSAGE-TEXT',
    } as const
}


export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextBody
            return state;
        case SEND_MESSAGE_TEXT:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        default:
            return state
    }
}