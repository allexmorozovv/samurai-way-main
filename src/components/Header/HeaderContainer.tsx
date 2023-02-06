import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/reduxStore";
import {setAuthUserData} from "../../redux/authReducer";


type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    userId: number | null
    email: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                   this.props.setAuthUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)