import React from "react";
import {Users} from "./UsersC";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/reduxStore";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersPageType,
    UserType
} from "../../redux/usersReducer";


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    userPage: UsersPageType

}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
const mapStateToProps = (state: RootStateType): { userPage: UsersPageType; totalUsersCount: number; pageSize: number; currentPage: number } => {
    return {
        userPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}


export const UsersContainer = connect(mapStateToProps, MapDispatchToProps)(Users)


