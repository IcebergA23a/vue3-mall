<template>
    <div class="admin">
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="username" label="Username"></el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
        <el-table-column label="Actions">
          <template #default="scope">
            <el-button type="danger" @click="confirmDelete(scope.row.id)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
<script>
    export default {
    name: 'AdminPage'
    }
</script>
<script setup>
    import { ref, onMounted } from 'vue';
    import { useUserStore } from '@/stores/userStore';
    import { ElMessageBox } from 'element-plus'; 
    
    const userStore = useUserStore();
    const users = ref([]);

    onMounted(async() => {
        try {
            await userStore.featchUsers();
            users.value = userStore.users;
        } catch (error) {
            ElMessageBox.alert('Failed to fetch users', 
            'Error', { type: 'error' });
        }
    })

    const confirmDelete = (userId) => {
        ElMessageBox.confirm('Are you sure you want to delete this user?', 'Confirm',
        {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type: 'warning',
        }).then(async() => {
            await userStore.deleteUser(userId);
            users.value = userStore.users;
        }).catch(() => {
            // 处理取消操作
        })
    }; 

</script>