import { observable, action, computed } from 'mobx'
import { queryHistory,queryBooks } from 'src/api/service/Index'
class IndexCommon {
  @observable
  books = [];
  @observable
  historyList = [];
  @action
  setBooks() {
    queryBooks().then( res => {
      this.books = res.data;
    })
  }
  @action
  setHistory() {
    queryHistory().then(res => {
      this.historyList = res.data
    })
  }
  @computed
  get getFilterHistory() {
    return (this.historyList.length)?JSON.parse(JSON.stringify(this.historyList)).slice(0,3):[]
  }

  @computed
  get getFilterBooks() {
    return (this.books.length)?JSON.parse(JSON.stringify(this.books)).slice(0,3):[]
  }
}

export default new IndexCommon()
