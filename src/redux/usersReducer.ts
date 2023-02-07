type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photos: {
        small: string,
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:  Array<number>
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":{
            return {
                ...state,
                followingInProgress: action.payload.isFetching ?
                    [...state.followingInProgress, action.payload.userId] :
                    state.followingInProgress.filter(el => el !== action.payload.userId)
            }
        }
        default:
            return state
    }
}

type userActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        payload: {userId}
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {userId}
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {currentPage}
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {totalUsersCount}
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {isFetching}
    } as const
}
export const toggleFollowingInProgress = (isFetching: boolean,userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        payload: {isFetching,userId}
    } as const
}

