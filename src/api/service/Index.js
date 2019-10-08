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

// 当前Books信息
export function queryBooks() {
  return fetchLink({
    url: base.url + `/index/Read/index`,
    method: 'post',
    data: {},
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}