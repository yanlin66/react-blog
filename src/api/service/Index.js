import base from "src/urlConfig/urlConfig";
import { fetchLink } from "src/api/fetch";
// 当前站内信息
export function queryHistory() {
  return fetchLink({
    url: base.url + `/index/history/index`,
    method: 'post',
    data: {},
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// 首页Books信息
export function queryBooks() {
  return fetchLink({
    url: base.url + `/index/read/index`,
    method: 'post',
    data: {},
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// 热点推荐Books信息
export function queryActiveBooks() {
  return fetchLink({
    url: base.url + `/index/read/recommonList`,
    method: 'post',
    data: {},
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// Books列表信息
export function queryBooksList(pages) {
  return fetchLink({
    url: base.url + `/index/read/readList?pages=1`,
    method: 'get',
    data: {},
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// 项目过往
export function queryReflect() {
  return fetchLink({
    url: base.url + `/index/reflect/index`,
    method: 'post',
    data: {},
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}