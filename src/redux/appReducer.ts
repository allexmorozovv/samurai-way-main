import {getAuthUserData} from "./authReducer";

export type AuthPageType = {
    initialized: boolean
}

const initialState: AuthPageType = {
    initialized: false
}

export const appReducer = (state: AuthPageType = initialState, action: initializedActionType) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

type initializedActionType =
    ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => {
    return {
        type: "INITIALIZED-SUCCESS",
    } as const
}
export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}

// export const login = (email: string, password: string, rememberMe: boolean = false) => {
//     return (dispatch: any) => {
//         authAPI.login(email, password, rememberMe)
//             .then(res => {
//                 if (res.data.resultCode === 0) {
//                     dispatch(getAuthUserData())
//                 } else {
//                     dispatch(stopSubmit('login', {_error: res.data.messages.length > 0 ? res.data.messages[0] : 'Wrong email or password'}))
//                 }
//             })
//     }
// }
// export const logout = () => {
//     return (dispatch: any) => {
//         authAPI.logout()
//             .then(res => {
//                 if (res.data.resultCode === 0) {
//                     dispatch(setAuthUserData(null, null, null, false))
//                 }
//             })
//     }
// }

