import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token')
    }),
    actions: {
        async login(credentials) {
            try {
                // 首先发送登录请求
                const loginResponse = await axios.post('/api/users/login', credentials);
                const toke = loginResponse.data;
                this.token = toke;
                localStorage.setItem('token', toke);
                axios.defaults.headers.common['Authorization'] = `Bearer ${toke}`;

                // 登录成功后，获取用户信息
                const userResponse = await axios.get(`/api/users/${credentials.username}`);
                this.user = userResponse.data;
                this.isLoggedIn = true;
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('user', JSON.stringify(this.user));
            } catch (error) {
                console.error('Login error: ',error);
                this.isLoggedIn = false;
                 throw error;
            }
        },
        logout() {
            this.isLoggedIn = false;
            this.user = null;
            this.token = null;
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        },
    }
})