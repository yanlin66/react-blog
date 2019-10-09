import { observable, action, computed } from 'mobx'
import { queryHistory,queryBooks,queryReflect,queryActiveBooks,queryBooksList } from 'src/api/service/Index'
class IndexCommon {
  @observable
  IndexBooks = [];
  @observable
  historyList = [];
  @observable
  Reflect = [];
  @observable
  ActiveBooks = [];
  @observable
  BookList = [];
  @observable
  BookListPages = null;
  @observable
  BookListCount = null;

  @action
  SetBooks() {
    queryBooks().then( res => {
      this.IndexBooks = res.data;
    })
  }
  @action
  SetBooksList() {
    queryBooksList().then( res => {
      this.BookList = res.data.data;
      this.BookListCount = res.data.count;
    })
  }
  @action
  addPagesFun(Pages) {
    this.BookListPages = Pages;
  }
  @action
  addBooksList(Pages) {
    queryBooksList(Pages).then( res => {
      this.BookList.concat(res.data.data);
      this.BookListCount = res.data.count;
    })
  }
  @action
  SetActiveBooks() {
    queryActiveBooks().then( res => {
      this.ActiveBooks = res.data;
    })
  }
  @action
  SetHistory() {
    queryHistory().then(res => {
      this.historyList = res.data
    })
  }
  @action
  SetReflect() {
    queryReflect().then(res => {
      this.Reflect = res.data
    })
  }
  @computed
  get getFilterHistory() {
    return (this.historyList.length)?JSON.parse(JSON.stringify(this.historyList)).slice(0,3):[]
  }

  @computed
  get getFilterBooks() {
    return (this.IndexBooks.length)?JSON.parse(JSON.stringify(this.IndexBooks)).slice(0,3):[]
  }
}

export default new IndexCommon()
