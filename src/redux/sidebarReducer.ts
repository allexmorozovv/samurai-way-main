import {SidebarType} from "./store";
import {addPostAC, updateNewPostAC} from "./profileReducer";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "./dialogsReducer";

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendNewMessageTextAC>

let initialState = {}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionTypes) => {
    return state
}