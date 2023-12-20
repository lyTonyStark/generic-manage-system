<template>
  <el-container>
    <SideMenu/>
    <el-container direction="vertical">
      <HeaderMenu/>
      <el-main>
        userManageCenter(add users)
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import HeaderMenu from '~/components/HeaderMenu.vue'
import SideMenu from '~/components/SideMenu.vue'
</script>