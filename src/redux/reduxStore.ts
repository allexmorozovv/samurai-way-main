import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {legacy_createStore as createStore} from 'redux'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})


export type RootStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)