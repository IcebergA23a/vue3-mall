// 路由配置

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Store from './Storage';

const Router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login , name: 'login'},
        { path: '/home', component: Home, name: 'home' }
    ]
});

Router.beforeEach((from) => {
    let isLogin = Store.getters.isLogin;
    if (isLogin || from.name == 'login') {
        return true;
    } else {
        return { name: 'login' }
    }
})

export default Router;