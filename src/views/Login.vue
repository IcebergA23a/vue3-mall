<template>
    <div class="login">
      <el-form @submit.prevent="handleLogin">
        <el-form-item label="Username">
          <el-input v-model="loginForm.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="loginForm.password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>

<script>
    export default {
    name: 'LoginPage'
    }
</script>  

<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '../stores/authStore';
    import { useRouter } from 'vue-router';
    import { ElMessageBox } from 'element-plus';

    const router = useRouter(); 
    const authStore = useAuthStore();
    const loginForm = ref({username: '', password: ''});
    const handleLogin = async() => {
        try {
            await authStore.login(loginForm.value);
            console.log("登录成功")
            // 登录成功后重定向到profile
            router.push('/profile');
        } catch (error) {
            console.log(error);
            ElMessageBox.alert(
                'Login failed: ' + (error.response?.data || 'Unknown error'),
                'Login Error', 
                { type: 'error' }
            );
        }
    }
</script>
  
  <style>
  .login {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
  }
  
  .el-form-item {
    margin-bottom: 20px;
  }
  
  .error-message {
    color: red;
    margin-bottom: 15px;
  }
  </style>