<template>
    <div class="register">
      <el-form @submit.prevent="handleRegister">
        <el-form-item label="Username">
          <el-input v-model="registerForm.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="registerForm.password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password">
          <el-input type="password" v-model="registerForm.confirmPassword" placeholder="Confirm Password"></el-input>
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="registerForm.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">Register</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>

  <script> 
    export default {
    name: 'RegisterPage'
    }
  </script>
  <script setup>
    import { ref } from 'vue';
    import { ElMessageBox } from 'element-plus';
    import axios from 'axios';
    import { useRouter } from 'vue-router';


    
    const registerForm = ref({
      username: '',
      password: '',
      confirmPassword: '',
      email: ''
    });
    const router = useRouter();


    const handleRegister = async() => {
        if (registerForm.value.password !== registerForm.value.confirmPassword) {
            ElMessageBox.alert(
                'Passwords do not match.',
                'Registration Error', 
                { type: 'error' }
            );
            return;
        }

        try {
            // Send post request to backend API for registration
            await axios.post('/api/users/register', {
                username: registerForm.value.username,
                password: registerForm.value.password,
                email: registerForm.value.email,
                role: 2 // Default role as regular user
            });

            // 注册成功后的逻辑
            ElMessageBox.alert('Registration successful', 'Success', { type: 'success' });
            router.push('/login');
        } catch (error) { 
            ElMessageBox.alert(
                'Registration failed: ' + (error.response?.data || 'Unknown error'),
                'Registration Error', 
                { type: 'error' }
            );
        }
    }
  </script>

    <style>
  .register {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    /* 样式细节 */
  }
  </style>