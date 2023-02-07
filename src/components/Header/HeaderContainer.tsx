import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/reduxStore";
import {getAuthUserData} from "../../redux/authReducer";


type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    userId: number | null
    email: string | null
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            {...this.props}
            // isAuth={this.props.isAuth}
            // login={this.props.login}
            // userId={this.props.userId}
            // email={this.props.email}
        />
    }
}

const mapStateToProps = (state: RootStateType) => {
    return ({
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)