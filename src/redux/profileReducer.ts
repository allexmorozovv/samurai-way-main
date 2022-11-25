import {sendNewMessageTextAC, updateNewMessageTextAC} from "./dialogsReducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendNewMessageTextAC>

const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 25},
        {id: 3, message: "Yo!", likesCount: 15},
        {id: 4, message: "Yo!", likesCount: 15},
    ]
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case  "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ""};
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST",

    } as const
}

export const updateNewPostAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}