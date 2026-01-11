import { createRouter, createWebHashHistory  } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

import Home from '../views/Home.vue';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Register  from '@/views/Register.vue';
import Admin from '@/views/Admin.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
      path: '/profile/',
      name: 'Profile',
      component: Profile,
      props: true,
      meta: { requiresAuth: true}
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: { requiresAdmin: true } // 仅管理员可访问
    }
]
const router = createRouter({
  history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const userIsAuthenticated = authStore.isLoggedIn;
    const userIsAdmin = authStore.user?.role === 1;

    if (to.matched.some(record => record.meta.requiresAuth) && !userIsAuthenticated) {
        next({ name: 'Login' });
    } else if (to.matched.some(record => record.meta.requiredAdmin) && !userIsAdmin) {
        next({ name: 'Home'});
    } else {
        next();
    } 
});

export default router;
