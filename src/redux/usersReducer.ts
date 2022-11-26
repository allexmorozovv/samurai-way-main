import {sendNewMessageTextAC, updateNewMessageTextAC} from "./dialogsReducer";
import {addPostAC, updateNewPostAC} from "./profileReducer";

export type UserType = {
    id: number
    avatar: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}


export type UsersPageType = {
    users: Array<UserType>
}

 type ActionTypes =
    // ReturnType<typeof addPostAC>
    // | ReturnType<typeof updateNewPostAC>
    // | ReturnType<typeof updateNewMessageTextAC>
    // | ReturnType<typeof sendNewMessageTextAC>
     ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>


const initialState: UsersPageType = {
    users: [
        {
            id: 1,
            avatar: "https://avatars.mds.yandex.net/i?id=d2abdba8897217f4f18bba2f1e7c1888-5545903-images-thumbs&n=13",
            followed: true,
            fullName: "Alex",
            status: "I'm fine",
            location: {city: "Rome", country: "Italy"}
        },
        {
            id: 2,
            avatar: "https://avatars.mds.yandex.net/i?id=d2abdba8897217f4f18bba2f1e7c1888-5545903-images-thumbs&n=13",
            followed: false,
            fullName: "Bob",
            status: "I'm fine",
            location: {city: "Paris", country: "France"}
        },
        {
            id: 3,
            avatar: "https://avatars.mds.yandex.net/i?id=d2abdba8897217f4f18bba2f1e7c1888-5545903-images-thumbs&n=13",
            followed: true,
            fullName: "Tom",
            status: "I'm fine",
            location: {city: "London", country: "England"}
        },
    ]
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionTypes): UsersPageType => {
    switch (action.type) {
        case  "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}


        case  "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)};


        case "SET-USERS":
            return {...state, users:action.users};


        default:
            return state

    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
