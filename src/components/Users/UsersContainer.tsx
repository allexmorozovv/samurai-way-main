import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: RootStateType):MapStateToPropsType => {
    return {
        usersPage:state.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)