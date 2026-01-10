<template> 
   <div id="app">
      <Navbar/>
      <router-view/>
   </div>
</template>

<script setup> 
import Navbar from './components/Navbar.vue'; 
</script>

<style> 
/* 全局样式，这些css样式是全局生效的，功能模块通用 */
body {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}
.content-container {
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  min-width:1200px;
  display:inline-block; 
  width:90%;
}
.input-tip {
  margin: 0 10px;
  line-height: 40px;
}
.input-field {
  margin-right: 40px;
}
.content-row {
  margin-bottom: 20px;
}
</style>
