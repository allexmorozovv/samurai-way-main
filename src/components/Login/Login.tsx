import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {requiredFields} from "../../utils/validators/validators";

type FormType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormType>) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} validate={[requiredFields]} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} validate={[requiredFields]} component={Input}/>
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

type LoginPropsType = {}

export const Login = (props: LoginPropsType) => {
    const onSubmitHandler = (formData: FormType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmitHandler}/>
    </div>
}