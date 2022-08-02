import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入flexible.js 移动端各种设备兼容
import "@/mobile/flexible.js"
// 引入reset.css 共同样式
import "@/styles/reset.css"

// 引入封装的路由
import router from "@/router/index.js"
// 全局引入vant组件
import { Tabbar, TabbarItem, NavBar } from 'vant';
// 1.标签栏组件
Vue.use(Tabbar);
Vue.use(TabbarItem);
// 2.NavBar导航栏
Vue.use(NavBar);
// 3.image图片
import { Image as VanImage } from 'vant';
Vue.use(VanImage);
// 4.row和col布局
import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);
//5.最新音乐 单元格布局
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
// 6.字体图标
import { Icon } from 'vant';
Vue.use(Icon);
// 7.搜索框
import { Search } from 'vant';
Vue.use(Search);
// 8.button按钮
import { Button } from 'vant';
Vue.use(Button);
// 9.list列表
import { List } from 'vant';
Vue.use(List);

// 添加全局自定义命令
// input自动获取焦点
Vue.directive("focus", {
  inserted(el) {
    el.focus()
  }
})

// vant 适配
// * postcss – 配合webpack翻译css代码
// * postcss-pxtorem – 配合webpack, 自动把px转成rem
// * 新建postcss.config.js – 设置相关配置
// * 重启服务器, 再次观察Vant组件是否适配

// 1. 下载postcss和==postcss-pxtorem@5.1.1==

//    postcss作用: 是对css代码做降级处理

//    postcss-pxtorem: 自动把所有代码里的css样式的px, 自动转rem

// 2. src/新建postcss.config.js

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
