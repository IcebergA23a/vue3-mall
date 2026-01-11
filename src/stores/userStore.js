import { defineStore } from 'pinia';
import axios from 'axios'; 

export const useUserStore = defineStore('user', {
    state: () => ({
        currentUser: null,
        users: []
    }),
    actions: {
        async updateUserInfo(userInfo) {
            try {
                // 更新用户信息请求
                const updateResponse = await axios.put('/api/users/', userInfo);
                this.currentUser = updateResponse.data;
            } catch (error) {
                 console.error('Error updating user:', error);
            }
        }, 
    }
})