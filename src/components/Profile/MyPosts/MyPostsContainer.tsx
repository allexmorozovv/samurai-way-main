import React from "react";
import {ActionTypes, RootStateType} from "../../../redux/store";
import {addPostAC, updateNewPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (newText: string) => {
            dispatch(updateNewPostAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

