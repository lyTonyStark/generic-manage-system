import { createRouter, createWebHashHistory } from "vue-router";
import Home from '~/pages/home.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'
import UserManageCenter from '~/pages/userManageCenter.vue'
import AccountCenter from '~/pages/accountCenter.vue'
import DeleteUser from '~/pages/deleteUser.vue'
import UserList from '~/pages/userList.vue'

const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/userManageCenter",
    component: UserManageCenter
  },
  {
    path: "/accountCenter",
    component: AccountCenter
  },
  {
    path: "/deleteUser",
    component: DeleteUser
  },
  {
    path: "/userList",
    component: UserList
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

//路由拦截
router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.getItem("token") ? true : false;
  if (to.path == '/') {
    next()
  }else {
    isLogin ? next() : next('/')
  }
})

export default router