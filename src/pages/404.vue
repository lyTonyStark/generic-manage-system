<template>
  <div>
    <el-result
        icon="warning"
        title="404 Not Found !"
        sub-title="你找的页面飞走了~"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">返回</el-button>
        </template>
      </el-result>
  </div>
</template>
<script></script>