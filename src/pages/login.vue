<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left-container">
      <div>
        通用后台管理系统
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right-container">
      <h2>欢迎回来</h2>
      <!-- 登录表单 -->
      <el-form :model="form" :rules="rules" class="w-[250px]" ref="formRef">
        <!-- 用户名 -->
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="userPassWd">
          <el-input v-model="form.userPassWd" placeholder="输入密码" type="password" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 提交 -->
        <el-form-item>
          <el-button type="primary" class="w-[250px]" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>

    </el-col>
  </el-row>
</template>

<style scoped lang="postcss">
.login-container {
  @apply bg-indigo-500 min-h-screen;
}
.login-container .left-container {
  @apply flex items-center justify-center;
}
.login-container .right-container {
  @apply bg-light-50 flex items-center justify-center flex-col;
}
.left-container>div:first-child {
  @apply font-bold text-4xl text-light-50;
}
.right-container>h2 {
  @apply font-bold text-2xl text-gray-800 mb-6;
}
</style>

<script setup>
import { ref,reactive } from 'vue'
import { User } from '@element-plus/icons-vue'
import { Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

// do not use same name with ref
const form = reactive({
  userName: "",
  userPassWd: ""
})

const router = useRouter()

//输入框校验规则
const rules = {
  userName: [
    {
      required: true,
      message: '用户名不能为空！',
      trigger: 'blur'
    }
  ],
  userPassWd: [
    {
      required: true,
      message: '密码不能为空！',
      trigger: 'blur'
    }
  ]
}

const formRef = ref(null)

//提交按钮，运行流程：1、校验表单 2、拿到数据值，提交给后台 3、设置token
const onSubmit = () => {
  formRef.value.validate ((valid)=>{
    console.log(valid)
    if(valid) {
      console.log("通过", form)
      localStorage.setItem("token", "Stephlin")
      axios.get("/users").then(res=>{
        console.log(res.data)
      })
      router.push("/home")
    }
  })
}
</script>