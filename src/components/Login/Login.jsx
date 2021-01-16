import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControl/formsControl";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "../Common/FormsControl/formControl.module.css"


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('login','email',[requiredField],Input, {type: "text"})}
            {createField('password','password',[requiredField],Input, {type: "text"})}

            <div style={{display: 'flex'}}>
                <Field name={'rememberMe'} component={Input} type="checkbox"/> Remember me
            </div>
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