import {rerenderTree} from "../render";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileMessagesType = {
    newPostText: string
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfileMessagesType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ProfileType = {
    newPostText: string
    posts: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void

}


export type MainStateType = {
    state: RootStateType
}


let render = () => {
    console.log('hey')
}

export const subscribe = (observer: () => void) => {
    render = observer
}

export let state: RootStateType = {
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
        ]
    },
    sidebar: {}
}
export const addPost = () => {
    const newPost: PostType = {id: new Date().getTime(), message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderTree(state)
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderTree(state)
}






