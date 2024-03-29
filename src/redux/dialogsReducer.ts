import {addPostAC} from "./profileReducer";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type DialogsPageType = typeof initialState

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendNewMessageTextAC>


const initialState = {
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Kris"},
        {id: 3, name: "Bob"},
        {id: 4, name: "Tom"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you?"},
        {id: 1, message: "Yo!"},
        {id: 1, message: "Yo!"},
    ] as Array<MessageType>,

}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE-TEXT":
            const newMessage: MessageType = {id: new Date().getTime(), message: action.newMessageText}
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}


export const sendNewMessageTextAC = (newMessageText: string) => {
    return {
        type: "SEND-MESSAGE-TEXT",
        newMessageText
    } as const
}