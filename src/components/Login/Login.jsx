import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControl/formsControl";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "../Common/FormsControl/formControl.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('login','email',[requiredField],Input, {type: "text"})}
            {createField('password','password',[requiredField],Input, {type: "text"})}


            <div style={{display: 'flex'}}>
                <Field name={'rememberMe'} component={Input} type="checkbox"/> Remember me
            </div>
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField('Symbols from image','captcha',[requiredField],Input, {type: "text"})}
            {error && <div className={s.formSummaryError}>
                <span>{error}</span>
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state) =>({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)