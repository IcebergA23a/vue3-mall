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
        async featchUsers() {
            try {
                // 获取所有用户信息
                const response = await axios.get('/api/users');
                this.users = response.data; 
            } catch (error) {
                 console.error('Error fetching users:', error);
            }
        },
        async deleteUser(userId) {
            try {
                // 删除用户
                await axios.delete(`/api/users/${userId}`);
                await this.featchUsers(); // 刷新用户列表
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        } 
    }
})