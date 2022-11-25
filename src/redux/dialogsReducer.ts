import {ActionTypes, DialogsPageType, MessageType} from "./store";

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

let initialState = {
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Kris"},
        {id: 3, name: "Bob"},
        {id: 4, name: "Tom"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you?"},
        {id: 1, message: "Yo!"},
        {id: 1, message: "Yo!"},
    ],
    newMessageText: ""
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE_TEXT:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            return {...state,messages:[...state.messages, newMessage], newMessageText:""}
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state,newMessageText: action.newTextBody};
        default:
            return state
    }
}