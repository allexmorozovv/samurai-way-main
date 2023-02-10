import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '8fc044d8-3f5e-469a-b681-136f15cb55d0'}
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
            return response.data
        })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status: status})
    }
}


export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
    }
}



