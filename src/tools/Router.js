// 路由配置

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Store from './Storage';

// 引入Order组件
import Order1 from '../components/order/Order1.vue'

const Router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login , name: 'login'},
        { path: '/home', component: Home, name: 'home',
            // 新增订单管理模块的路由
            children: [
                { 
                    path: 'order/:type', // 0 是普通订单，1 是秒杀订单
                    component: Order1,
                    name: "Order"
                }
            ],
            redirect: '/home/order/0'
         }
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