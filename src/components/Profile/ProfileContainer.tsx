import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/reduxStore";
import {setUserProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return ({
        profile: state.profilePage.profile
    })


}
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
