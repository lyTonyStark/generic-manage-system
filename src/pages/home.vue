<template>
  <el-container>
    <SideMenu/>
    <el-container direction="vertical">
      <HeaderMenu/>
      <el-main>
        home
      </el-main>
    </el-container>
  </el-container>
</template>

<style>

</style>

<script setup>
import HeaderMenu from '~/components/HeaderMenu.vue'
import SideMenu from '~/components/SideMenu.vue'
</script>
