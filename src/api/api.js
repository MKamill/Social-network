import axios from 'axios'
const API_KEY = "1e2dc89c-6634-4f7f-ae3a-3b1220a866c2"

const axi = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': API_KEY,
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axi.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return axi.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return axi.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axi.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return axi.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return axi.put(`profile/status`, { status: status });
    },
}

export const authAPI = {
    me() {
        return axi.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return axi.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return axi.delete(`auth/login`)
    },
}
