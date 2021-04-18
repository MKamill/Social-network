import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        { id: "1", message: "My name is Kamil", likesCount: "234" },
        { id: "2", message: "My name is Artem", likesCount: "24" },
        { id: "3", message: "Im so tired", likesCount: "2422212" },
        { id: "4", message: "Im so tired", likesCount: "2" },
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

   
export const addPostActionCreator = (newPostText) => {
    return {
        type: "ADD_POST",
        newPostText: newPostText
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status,
    }
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            if (!response.data) {
                dispatch(setStatus('status null :('))
            } else {
                dispatch(setStatus(response.data))
            }
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile,
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export default profileReducer