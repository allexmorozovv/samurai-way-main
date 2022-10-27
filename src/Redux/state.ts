// import {rerenderTree} from "../render";
//
// export type PostPropsType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// export type DialogItemPropsType = {
//     id: number
//     name: string
// }
// export type MessagePropsType = {
//     id: number
//     message: string
// }
// export type PostsPropsType = {
//     posts: Array<PostPropsType>
//     addPost:(postText:string)=>void
// }
//
// export type DialogsPropsType = {
//     dialogs: Array<DialogItemPropsType>
//     messages: Array<MessagePropsType>
// }
//
//
// export type AllPropsType = {
//     posts: Array<PostPropsType>
//     dialogs: Array<DialogItemPropsType>
//     messages: Array<MessagePropsType>
// }
// export type StatePropsType = {
//     state: AllPropsType
//     addPost:(postText:string)=>void
// }
//
//
//
// export const addPost=(postText:string)=>{
//     const newPost:PostPropsType={
//         id:new Date().getTime(),
//         message:postText,
//         likesCount:0
//     }
//     state.posts.push(newPost)
//     rerenderTree(state)
// }
//
//
//
//
//
//
// export let state :AllPropsType = {
//     posts: [
//         {id: 1, message: "Hi, how are you", likesCount: 15},
//         {id: 2, message: "It's my first post", likesCount: 25},
//         {id: 3, message: "Yo!", likesCount: 15},
//         {id: 4, message: "Yo!", likesCount: 15},
//     ],
//     dialogs: [
//         {id: 1, name: "Alex"},
//         {id: 2, name: "Kris"},
//         {id: 3, name: "Bob"},
//         {id: 4, name: "Tom"},
//     ],
//     messages: [
//         {id: 1, message: "Hi"},
//         {id: 1, message: "How are you?"},
//         {id: 1, message: "Yo!"},
//         {id: 1, message: "Yo!"},
//     ],
// }

let render=()=>{
    console.log('hey')
}

export const subscribe=(observer:()=>void)=>{
    render=observer
}

export let state: RootStateType = {
    profilePage: {
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
    // sidebar: {}
}


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
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

// export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfileMessagesType
    dialogsPage: DialogsPageType
    // sidebar: SidebarType
}




