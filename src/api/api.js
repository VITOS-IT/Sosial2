import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '2a3b6361-7a2b-407a-a076-d17f7c8d9e32'
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null){
      return instance.post(`auth/login`,{email, password, rememberMe, captcha}).then(response => response.data);
    },
    logout(){
        return instance.delete(`auth/login`).then(response => response.data);
    }
}
export const securityAPI = {
    getCapchaUrl(){
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }

}

export const profileAPI = {
    getProfile(userId){
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return  instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put('profile/status',{status: status})
    },
    saveUserPhoto(photoFile){
        let formData = new FormData();
        formData.append('image',photoFile)
        return instance.put('profile/photo',formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put('profile', profile)
    }
}