import { all_Song_Lists, mv_first, search_hot_detail, search_suggest} from "./home.js"
import { getSongById, getLyricById} from "./Play.js"
//推荐音乐api
export const all_Song_ListsAPI = all_Song_Lists
//最新音乐api
export const mv_first_API = mv_first
// 热门搜索api
export const search_hot_detail_API = search_hot_detail
// 关键词搜索api
export const search_suggest_API = search_suggest
// 获取歌曲详情api
export const getSongById_API = getSongById
// 获取歌词api
export const getLyricById_API = getLyricById