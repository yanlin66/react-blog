import base from "src/urlConfig/urlConfig";
import { fetchLink } from "src/api/fetch";
// 有效登陆
export function goLogin(dataObj) {
  return fetchLink({
    url: base.url + `/lsh/login`,
    method: 'post',
    data: dataObj,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    params:{}
  })
}

