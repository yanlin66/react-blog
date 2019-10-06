import { observable, action, computed } from 'mobx'
class commonStore {
  @observable
  selectedStore = [];
  @observable
  selectedGoods = [];
  @action
  setSelectedStore(val) {
    this.selectedStore = val;
  }
  @action
  setSelectedGoods(val) {
    this.selectedGoods = val;
  }
  @computed
  get demoFilter() {
    return 'demo'
  }
}

export default new commonStore()
