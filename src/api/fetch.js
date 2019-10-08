/**
 * Change by lin.seek on 19/05/20.
 */

import axios from 'axios';
import globalCode from "./globalCode";
import { message } from "antd";
import { _util } from 'src/utils'

//与服务器的对接的封装（异常的处理）
export function fetchLink(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {

      },
      timeout: 6000,
    });
    instance(options)
      .then(response => {
        const res = response;
        switch (res.status) {
          case globalCode.timeOut:
            message.error("登录过期，请退出重新登录");
            break;
          case  globalCode.error:
            message.info(res.message);
            reject(res);
            break;
          case 200:
            resolve(res.data);
            break;
          default:
            message.warning((res.message)?res.message:res.msg);
            reject(res);
            break;
        }
      })
      .catch(error => {
        if (error.response == null) {
          message.error('响应超时');
        } else {
          message.error('系统异常，请稍后重试！');
        }
        reject(error);
      });
  });
}