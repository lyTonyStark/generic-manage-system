import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      // 侧边宽度
      asideWidth: "250px"
    }
  },
  mutations: {
    // 展开/收起侧边栏
    handleAsideWidth(state) {
      state.asideWidth = state.asideWidth == "250px" ? "64px" : "250px"
    }
  }
})

export default store
