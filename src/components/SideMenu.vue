<template>
  <el-aside class="aside-container" :style="{ width:$store.state.asideWidth }">
    <el-menu :unique-opened="true" :router="true" :default-active="route.fullPath" :collapse-transition="false" :collapse="isCollapse">
      <!-- 首页 -->
      <el-menu-item index="/home">
        <el-icon><HomeFilled /></el-icon>
        <span>
          首页
        </span>
      </el-menu-item>
      <!-- 个人中心 -->
      <el-menu-item index="/accountCenter">
        <el-icon><UserFilled /></el-icon>
        <span>
          个人中心
        </span>
      </el-menu-item>
      <!-- 用户管理 -->
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Avatar /></el-icon>
          <span>
            用户管理
          </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userManageCenter">新增用户</el-menu-item>
          <el-menu-item index="/deleteUser">删除用户</el-menu-item>
          <el-menu-item index="/userList">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<style scoped lang="postcss">
.aside-container {
  @apply bg-light-400 h-screen;
  transition: all 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

<script setup>
import { HomeFilled,UserFilled,Avatar } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
console.log(route)
//是否折叠侧边栏
const isCollapse = computed(()=>!(store.state.asideWidth == '250px'))
</script>