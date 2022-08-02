<template>
  <div>
      <form action="/">
        <van-search :show-action="search_content.length != 0"
        v-model="value" 
        ref="ipts"
        autofocus="true"
        placeholder="请输入搜索关键词" 
        shape="round" 
        @search="onSearch"
        @cancel="onCancel"
        @input="onInput"
        />
      </form> 
      <p class="hot_title">{{title}}</p>
      <div class="hot_name_wrap" v-if="search_content.length === 0">
        <van-button 
        type="info" 
        class="hot_item"
        v-for="obj in search_list" :key="obj.id"
        @click="btnFn(obj.searchWord)"
        >{{obj.searchWord}}</van-button>
      </div>
      <div v-else>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <VanCell :name="obj.name" :s_name="obj.al.name" :id="obj.id" v-for="obj in search_content" :key="obj.id"></VanCell>
        </van-list>
      </div>
  </div>
</template>

<script>
import {search_hot_detail_API} from "@/api/index.js"
import {search_suggest_API} from "@/api/index.js"

// 引入封装的van-cell文件
import VanCell from "@/components/van-cell.vue"
export default {
  data() {
    return {
      value: '',
      search_list: [],
      search_content: [],
      loading: false,
      finished: false,
      page: 1,//页码数
      title: "热门搜索",
      timer: null
    };
  },
  components: {
    VanCell
  },
  async created() {
    const res = await search_hot_detail_API()
    this.search_list = res.data.data
  },
  methods: {
    async searchContent() {
      return await search_suggest_API({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20
      })
      // async函数修饰的是promise对象
      // 把await返回的promise对象return出去，在外面调用searchContent函数，
      // 获取到的结果就是一个promise对象，在用await或.then方法接收返回来的值
    },
    onSearch() {
      this.title = "最佳匹配"
    },
    onCancel() {
      this.search_content = ""
      this.title = "热门搜索"
    },
    async onInput() {
        // 防抖
        // 概念 记时n秒，最后执行一次；重新执行，则清除上一个记时
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(async () => {
          this.page = 1
          this.finished = false
          // 如果搜索值为空，就清空数组里面的内容，阻止网络请求
          // 执行，提前return 或者用if else
          if(this.value === "") {
            this.search_content = []
            return
          }
          const res = await this.searchContent()
          if(res.data.result.songCount === 0) {//没有数据
            this.search_content = []
            return
          }
          this.search_content = res.data.result.songs
          this.loading = false//加载完成
        }, 900)
    },
    async btnFn(val) {
      this.page = 1
      this.finished = false
      this.value = val
      this.title = "最佳匹配"
      // 调用methods自定义方法需要加this
      // console.log(this.searchContent());
      const res = await this.searchContent()
      this.search_content = res.data.result.songs
      this.loading = false//加载完成
    },
    async onLoad() {
      // 异步更新数据
      // 当页面滚动到底部继续发起请求
        this.page++
        const res = await this.searchContent()
        console.log(res);
        // 如果没有更多数据了就阻止他继续加载
        if(res.data.result.songCount === 0) { 
          this.finished = true//如果finished为true的话，页面滚到底部就不会触发onload事件,并显示（没有更多数据了）
          this.loading = false//加载完成
          return
        }
        // 把当前数据和后面请求来的数据拼接起来
        this.search_content = [...this.search_content, ...res.data.result.songs]
        // 加载状态结束 数据加载完毕，保证下一次还能触发onload
        this.loading = false
    }
  }
}
</script>

<style scoped>
  /* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
  padding: 8px 0 0 10px;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
.van-cell--center {
  border-bottom: 1px solid rgb(238, 240, 243);
} 
</style>