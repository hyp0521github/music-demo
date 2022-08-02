import Vue from 'vue'
import Layout from "@/views/Layout/index.vue"
import Play from "@/views/Play/index.vue"
import Search from "@/views/Search/index.vue"
import Home from "@/views/Home/index.vue"

// 1.下载
// 2.引入vue-router
import VueRouter from "vue-router"
// 3.在vue上注册
Vue.use(VueRouter)
// 4.规则数组
const routes = [
  {
    path: "/",
    redirect: "/layout"
  },
  {
    path: "/layout",
    component: Layout,
    redirect: "/layout/home",
    children: [
      {
        path: "search",
        component: Search,
        name: "search",
        // meta保存路由对象额外信息的
        meta: {
          title: "搜索"
        }
      },
      {
        path: "home",
        component: Home,
        meta: {
          title: "首页"
        }
      }  
    ]
  },
  {
    path: "/play",
    name: "play",
    component: Play
  }
]
// 5.创建路由对象
const router = new VueRouter({
  routes
})

// 导出router对象
export default router