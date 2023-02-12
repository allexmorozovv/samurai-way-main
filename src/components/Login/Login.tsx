import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {requiredFields} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";

type FormType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm = (props: InjectedFormProps<FormType>) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} validate={[requiredFields]} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} validate={[requiredFields]} component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>

            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormType>({form: 'login'})(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType



const Login = (props: LoginPropsType) => {
    const onSubmitHandler = (formData: FormType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitHandler}/>
    </div>
}

const mapStateToProps = (state: RootStateType): { isAuth: boolean } => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)