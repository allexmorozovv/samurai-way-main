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
    getProfile(userId: string){
        return instance.get(`profile/` + userId)
    }
    // getProfile(userId: string) {
    //     console.warn('Old method. Please use ProfileAPO object')
    //     return profileAPI.getProfile(userId)
    // }
}



export const authAPI={
    getMe(){
        return instance.get(`auth/me`)
    }
}



