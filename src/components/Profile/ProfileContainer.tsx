import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/reduxStore";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string | any
}
type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type MainPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<MainPropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    })
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataProfileContainer)
