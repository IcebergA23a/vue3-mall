<template>
    <div class="profile">
      <el-form @submit.prevent="updateProfile">
        <el-form-item label="Username">
          <el-input v-model="profileForm.username" placeholder="Username" disabled></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="profileForm.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input type="password" v-model="profileForm.password" placeholder="New Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">Update Profile</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>

<script>
    export default {
    name: 'ProfilePage'
    }
</script>  
<script setup>
    import { ref } from 'vue';
    import{ useAuthStore } from '../stores/authStore';
    import { useUserStore } from '@/stores/userStore';
    import { ElMessageBox } from 'element-plus';

    const authStore = useAuthStore();
    const userStore = useUserStore();

    const profileForm = ref({
    username: '',
    email: '',
    password: ''
    });
    const user = authStore.user;
    profileForm.value = { ...user, newPassword: '' };

    const updateProfile = async() => {
        try {
            // 调用更新用户信息的 API
            await userStore.updateUserInfo(profileForm.value);
            ElMessageBox.alert(
                'Profile updated successfully', 
                'Success', 
                { type: 'success' });
        } catch (error) {
            ElMessageBox.alert(
                'Failed to update profile', 
                'Error', 
                { type: 'error' });
        }
    }

</script>