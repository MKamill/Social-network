const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
        { id: "1", photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", isfollowed: true, fullName: "My name is Kamil", status: "s1", location: { city: "ci1", country: "cy1", } },
        { id: "2", photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", isfollowed: false, fullName: "My name is Sasha", status: "s2", location: { city: "ci1", country: "cy1", } },
        { id: "3", photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", isfollowed: false, fullName: "My name is Guzel", status: "s3", location: { city: "ci1", country: "cy1", } },
        { id: "4", photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", isfollowed: true, fullName: "My name is Maxim", status: "s4", location: { city: "ci1", country: "cy2", } },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, isfollowed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, isfollowed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.users],
            }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}


export default usersReducer