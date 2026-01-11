<template>
    <el-header>
        <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
            <el-menu-item index="2" v-if="!isLoggedIn"><router-link to="/login">Login</router-link></el-menu-item>
            <el-menu-item index="3" v-if="!isLoggedIn"><router-link to="/register">Register</router-link></el-menu-item>
            <el-menu-item index="4" v-if="isLoggedIn"><router-link to="/profile">Profile</router-link></el-menu-item>
            <el-menu-item index="5" v-if="isLoggedIn && isAdmin"><router-link to="/admin">Admin</router-link></el-menu-item>
            <el-menu-item index="6" v-if="isLoggedIn" @click="logout">Logout</el-menu-item>
        </el-menu>
    </el-header>
</template>

<script  >
     export default { 
    name: 'NavbarPage'
    }
</script>
<script setup>
    import { computed } from 'vue';
    import { useAuthStore } from '@/stores/authStore';
    import { useRouter } from 'vue-router';

    const authStore = useAuthStore();
    const isLoggedIn = computed(() => authStore.isLoggedIn);
    const isAdmin = computed(() => authStore.user?.role === 1);

    const router = useRouter();
    const logout = () => {
        authStore.logout();
        router.push('/');
    };
</script>