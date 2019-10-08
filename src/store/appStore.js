import {observable, action} from 'mobx'

class AppStore {
  @observable users = [] ; //模拟用户数据库

  @action
  setUsers(userInfo) {
    this.users = userInfo;
  }
}

export default new AppStore()
