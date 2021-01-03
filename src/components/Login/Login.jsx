import React from 'react'
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} component="input" type="text" placeholder={'login'}/>
            </div>
            <div>
                <Field name={'password'} component="input" type="text" placeholder={'password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component="input" type="checkbox"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login