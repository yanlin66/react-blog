import {observable, action} from 'mobx'

class AppStore {
  @observable users = [] ; //模拟用户数据库

}

export default new AppStore()
