import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UserType} from "../../redux/usersReducer";


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    userPage: UsersPageType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        userPage: state.usersPage
    }
}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(Users)


