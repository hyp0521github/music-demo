// 文件名-尽量和模块页面文件名统一(方便查找)
import request from "@/utils/request.js"

// 导出推荐歌单的axios
export const all_Song_Lists = params => request({
    url: "/personalized",
    params
})
// 导出最新mv的axios
export const mv_first = params => request({
    url: "/personalized/newsong",
    params
})
// 导出热门搜索的axios
// 当你的箭头函数仅有一个参数的时候，可以省略掉括号。
// 当你的函数仅有一个表达式的时候，可以省略{}和return
export const search_hot_detail = params => request({
    url: "/search/hot/detail",
    params
})
// 导出关键词搜索
export const search_suggest = params => request({
    url: "/cloudsearch",
    params
})