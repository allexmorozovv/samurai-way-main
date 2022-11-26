import {addPostAC, profileReducer, updateNewPostAC} from "./profileReducer";
import {dialogsReducer, sendNewMessageTextAC, updateNewMessageTextAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileMessagesType = {
    newPostText: string
    posts: Array<PostType>
}

type DialogsPageType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
type DialogsType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    dispatch: (action: ActionTypes) => void
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfileMessagesType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type ProfileType = {
    newPostText: string
    posts: Array<PostType>
    dispatch: (action: ActionTypes) => void
}

type StoreType = {
    _state: RootStateType
    _render: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

type MainStateType = {
    store: StoreType
}

type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendNewMessageTextAC>


const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 25},
                {id: 3, message: "Yo!", likesCount: 15},
                {id: 4, message: "Yo!", likesCount: 15},
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    _render() {
        console.log('hey')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._render = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._render()
    }
}
















