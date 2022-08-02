<template>
  <div>
      <p class="title">推荐歌单</p>
      <div>
        <van-row gutter="6">
          <van-col span="8" v-for="obj in allSong_list" :key="obj.id">
            <van-image
              width="100%"
              height="3rem"
              fit="cover"
              :src="obj.picUrl"
            />
            <p class="song_name">{{obj.name}}</p>
          </van-col>
        </van-row>
      </div>
      <p class="title">最新音乐</p>
      <van-cell-group v-for="obj in firstMv_list" :key="obj.id">
        <van-cell center>
          <!-- 自定义左侧标题 -->
          <template #title>
            <p class="custom-title">{{obj.name}}</p>
            <span class="custom-title" style="color: #969799">{{obj.song.artists[0].name}}-</span>
            <span class="custom-title" style="color: #969799">{{obj.name}}</span>
          </template>
          <!-- 自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="play-circle-o" class="search-icon"/>
          </template>
        </van-cell>
      </van-cell-group>
  </div>
</template>

<script>
import {all_Song_ListsAPI} from "@/api/index.js"
import {mv_first_API} from "@/api/index.js"
export default {
  data() {
    return {
      allSong_list: [],
      firstMv_list: []
    }
  },
  async created() {
      const res = await all_Song_ListsAPI({limit: 6})
      this.allSong_list = res.data.result
      const res_mv = await mv_first_API({limit: 6})
      this.firstMv_list = res_mv.data.result
      console.log(res_mv);
  }
}
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;/*换行 */
  text-overflow: ellipsis;/*显示省略符号来代表被修剪的文本。 */
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
 .search-icon {
    font-size: 20px;
    /* 规定应该从父元素继承 line-height 属性的值。 */
    line-height: inherit;
  }
  .custom-title {
    margin-right: 4px; 
    vertical-align: middle;
  }
</style>