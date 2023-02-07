import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type AuthPageType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState: AuthPageType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthPageType = initialState, action: authActionType)=> {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload, isAuth: true}
        }
        default:
            return state
    }
}

type authActionType =
    ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            userId,
            login,
            email,
        }
    } as const
}
export const getAuthUserData = () => {
    return (dispatch: Dispatch)=>{
        authAPI.getMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

