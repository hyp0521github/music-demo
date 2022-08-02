<template>
  <div>
      <van-nav-bar :title="strTitle" fixed/>
        <!-- 引入二级路由 -->
      <div class="main">
        <router-view></router-view>
      </div>
      <van-tabbar route>
        <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
   data() {
    return {
      // 声明式导航获取参数 直接获取index.js里面的值
      strTitle: this.$route.meta.title // "默认"顶部导航要显示的标题 (默认获取当前路由对象里的meta中title值)
    };
   },
  //  监听$route路由的变化
   watch: {
     $route: {
       handler() {
         this.strTitle = this.$route.meta.title
         console.log(this.$route);
       }
     }
   },
}
</script>

<style>
.van-nav-bar__text {
  color: black;
}
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-bottom: 50px;
  padding-top: 46px;
}
</style>