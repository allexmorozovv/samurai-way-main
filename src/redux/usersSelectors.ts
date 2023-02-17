import {RootStateType} from "./reduxStore";
import {createSelector} from "reselect";
import {UserType} from "./usersReducer";

export const getUsers = (state: RootStateType) => {
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(getUsers, (users: Array<UserType>) => {
    return users.filter(u => true)
})


export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}