type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    avatar: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersPageType = {
    users: Array<UserType>
}


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
            fullName: "Alex",
            status: "I'm fine",
            location: {city: "Rome", country: "Italy"}
        },
        {
            id: 3,
            avatar: "https://avatars.mds.yandex.net/i?id=d2abdba8897217f4f18bba2f1e7c1888-5545903-images-thumbs&n=13",
            followed: true,
            fullName: "Alex",
            status: "I'm fine",
            location: {city: "Rome", country: "Italy"}
        },
    ]
}


export const usersReducer = (state: UsersPageType = initialState, action: userActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        }
        case "SET-USERS": {
            return {...state, users: action.payload.users}
        }
        default:
            return state
    }
}

type userActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userId
        }
    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
}

