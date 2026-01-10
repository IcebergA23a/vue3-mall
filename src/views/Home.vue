<template>
    <div class="home">
      <h1>欢迎来到用户管理系统</h1>
      <p>体验下一代用户账户和角色管理的高效解决方案。</p>
      <el-carousel indicator-position="outside">
        <el-carousel-item>
          <h3>用户友好界面</h3>
          <p>简单直观的导航，轻松管理用户账户。</p>
        </el-carousel-item>
        <el-carousel-item>
          <h3>先进的安全性</h3>
          <p>我们强大的安全功能，保障您的用户数据安全。</p>
        </el-carousel-item>
        <el-carousel-item>
          <h3>实时分析</h3>
          <p>实时监控用户活动和分析数据。</p>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <!-- 现有的脚本和样式 -->
  <script  >
// Vue and Element Plus setup scripts
export default {
  name: 'HomePage'
}
</script>

<style>
.home {
  text-align: center;
  /* 添加更多的样式，如背景、字体等 */
}

.el-carousel-item h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.el-carousel-item p {
  font-size: 16px;
}

/* 添加更多自定义样式 */
</style>