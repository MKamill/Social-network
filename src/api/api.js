import axios from 'axios'

const axi = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axi.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => response.data)
    }
}
