<template>
    <el-header>
        <el-menu :default-active="1" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
            <el-menu-item index="2" v-if="!isLoggedIn"><router-link to="/login">Login</router-link></el-menu-item>
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

     const authStore = useAuthStore();
     const isLoggedIn = computed(() => authStore.isLoggedIn);
</script>