import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '8fc044d8-3f5e-469a-b681-136f15cb55d0'}
})


export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
        .then(res => {
            return res.data
        })
}
export const unFollow =(userId: number)=> {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
}
export const follow =(userId: number)=> {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
}

