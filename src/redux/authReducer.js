import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-net/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-net/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null cPTCHA Not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, captchaUrl: action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (url) => ({
    type: GET_CAPTCHA_URL_SUCCESS,payload: url
});

export const setMe = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        //success get auth data
        dispatch(setMe());
    } else {
        if(response.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCapchaUrl();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;