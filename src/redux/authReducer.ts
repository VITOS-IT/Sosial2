import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-net/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-net/auth/GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType2 = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}
let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null //if null cPTCHA Not required
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                userId2: 'sdfsf',
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
type SetAuthUserDataPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean
}
type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth:boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

type GetCaptchaUrlSuccess = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: string
}
export const getCaptchaUrlSuccess = (url: string):GetCaptchaUrlSuccess => ({
    type: GET_CAPTCHA_URL_SUCCESS,payload: url
});

export const setMe = () => async (dispatch: any) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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
export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCapchaUrl();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;