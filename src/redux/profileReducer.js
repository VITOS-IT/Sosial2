import {profileAPI} from "../api/api";

const ADD_POST = 'samurai-net/profile/ADD-POST';
const SET_USER_PROFILE = 'samurai-net/profile/SET_USER_PROFILE';
const SET_STATUS = 'samurai-net/profile/SET_STATUS';
const DELETE_POST = 'samurai-net/profile/DELETE_POST';


let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: `It's my first post`, likesCount: 20}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData.length + 1,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],

            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));

}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export default profileReducer;