<template>
  <el-header class="header-container">
    <!-- 左部：logo、侧边导航栏折叠 -->
    <div class="left-header">
      <span>
        <el-icon :size="30"><ElemeFilled /></el-icon>
        <text>通用管理平台</text>
      </span>
      <el-icon :size="20" class="expand-fold-icon" @click="$store.commit('handleAsideWidth')">
        <Fold v-if="$store.state.asideWidth == '250px'"/>
        <Expand v-else/>
      </el-icon>
    </div>
    <!-- 右部：avatar、用户名、退出登陆和修改密码 -->
    <div class="right-header">
      <span>
        <el-icon :size="30"><Avatar /></el-icon>
      </span>
      <el-dropdown>
        <span class="el-dropdown-link ml-2 mt-2 text-dark-500">
          <text>Username</text>
          <el-icon class="el-icon--right ml-2">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="clickToAccountCenter">个人中心</el-dropdown-item>
            <el-dropdown-item @click="clickToLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style scoped lang="postcss">
.header-container {
  @apply flex flex-row justify-between items-center;
  height: 64px;
}
.left-header {
  @apply flex flex-row items-center
}
.left-header>span {
  @apply flex flex-row items-center
}
.left-header>span>text {
  @apply text-base ml-2
}
.expand-fold-icon {
  @apply ml-10;
  cursor: pointer;
}
.expand-fold-icon:hover {
  color: blue;
}
.right-header {
  @apply flex flex-row
}
</style>

<script setup>
import { ElemeFilled,Fold,Avatar,ArrowDown,Expand } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

const router = useRouter()

// 点击跳转到个人中心
const clickToAccountCenter = () => {
  router.push("/accountCenter")
}

// 点击退出登录，删除token
const clickToLogout = () => {
  localStorage.removeItem("token")
  router.push("/")
}
</script>