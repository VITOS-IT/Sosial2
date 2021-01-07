import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/formsControl";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "../Common/FormsControl/formControl.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} validate={requiredField} component={Input} type="text" placeholder={'login'}/>
            </div>
            <div>
                <Field name={'password'} validate={requiredField} component={Input} type="text" placeholder={'password'}/>
            </div>
            <div style={{display: 'flex'}}>
                <Field name={'rememberMe'} component={Input} type="checkbox"/> Remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                <span>{props.error}</span>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)