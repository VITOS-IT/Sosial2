import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";


const FOLLOW = 'samurai-net/users/FOLLOW';
const UNFOLLOW = 'samurai-net/users/UNFOLLOW';
const SET_USERS = 'samurai-net/users/SET_USERS';
const SET_CURRENT_PAGE = 'samurai-net/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'samurai-net/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'samurai-net/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-net/users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                    uesrs: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (inProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    inProgress,
    userId
})


export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) =>{
    debugger

    dispatch(toggleFollowingProgress(true, userId));
        let data = await apiMethod(userId)
        if (data.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
export const follow = (userId) => {
    debugger
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}


export default usersReducer;