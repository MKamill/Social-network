import { usersAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        { id: "1", message: "My name is Kamil", likesCount: "234" },
        { id: "2", message: "My name is Artem", likesCount: "24" },
        { id: "3", message: "Im so tired", likesCount: "2422212" },
        { id: "4", message: "Im so tired", likesCount: "2" },
    ],
    newPostText: "-test-",
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: "ADD_POST"
    }
}

export const updateNewPostTextActionCreator = (data) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: data,
    }
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