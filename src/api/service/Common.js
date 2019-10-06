import base from "src/urlConfig/urlConfig";
import { fetchLink } from "src/api/fetch";
// 当前商户有效商品菜单列表
export function queryProductMenu(partnerId) {
  return fetchLink({
    url: base.url + `/menu/listDefault`,
    method: 'post',
    data: {
      partnerId: partnerId?partnerId:'1785'
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// 当前商户有效商品列表
export function queryProduct(dataObj) {
  return fetchLink({
    url: base.url + `/topic/listProduct`,
    method: 'post',
    data: dataObj,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// 当前商户有效省市列表
export function queryCity() {
  return fetchLink({
    url: base.url + `/shop/provinceCityList`,
    method: 'post',
    data: {},
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// 当前商户有效门店列表
export function queryStore(dataObj) {
  return fetchLink({
    url: base.url + `/shop/getByNameInfo`,
    method: 'post',
    data: dataObj,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
// 当前券有效门店列表
export function queryAvailableStore(dataObj) {
  return fetchLink({
    url: base.url + `/shop/getAvailableStore`,
    method: 'post',
    data: dataObj,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}


// 根据手机号获取用户openid
export function getUserOpenIdByPhone(phone) {
  return fetchLink({
    url: base.url + `/base/getUserOpenIdByPhone?phoneNumber=`+phone,
    method: 'post',
    data: {},
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}