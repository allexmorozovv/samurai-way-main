import {sendNewMessageTextAC, updateNewMessageTextAC} from "./dialogsReducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    },
    fullName: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    photos: {
        large: string | undefined,
        small: string | undefined
    },
    userId: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
    profile: ProfileType|null
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendNewMessageTextAC>
    | ReturnType<typeof setUserProfile>

const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 25},
        {id: 3, message: "Yo!", likesCount: 15},
        {id: 4, message: "Yo!", likesCount: 15},
    ],
    profile: null
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
            return {...state, newPostText: action.payload.newText}
        case "SET-USERS-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
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
        payload: {newText}
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USERS-PROFILE",
        payload: {profile}
    } as const
}