import {addPostAC, updateNewPostAC} from "./profileReducer";
import {sendNewMessageTextAC} from "./dialogsReducer";

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof sendNewMessageTextAC>

export type SidebarType = {}

let initialState:SidebarType = {}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionTypes) => {
    return state
}