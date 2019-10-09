import React from 'react'
import {inject, observer} from "mobx-react";
import { withRouter } from "react-router-dom";
import './style.less'


@inject("IndexCommon")
@observer
class BooksPage extends React.Component {
  render() {
    const { ActiveBooks,BookList } = this.props.IndexCommon;
    return (
      <div className='books-page'>
        <div className="books-warp">
          <div className="books-left">
            {
              BookList.length > 0 && BookList.map(req => {
                return (
                  <a key={req.id}>
                    <div className="a-list">
                      <div className="a-left"><img src="http://palpitation.shop/Uploads/2019-03-21/5c9392b22776c.png" /></div>
                      <div className="a-right">
                        <div className="a-title">{ req.title }<span>{req.create_time}</span></div>
                        <div className="a-bottom">{ req.brief }</div>
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
          <div className="books-right">
            <div className="a-search">
              <input type="text" placeholder="请输入关键词" name="searchtext" />
              <button type="submit">搜索</button>
            </div>
            <div className="a-title">热点记录</div>
            <ul>
              {
                (ActiveBooks.length > 0) && ActiveBooks.map(req => {
                  return (
                    <li key={req.id}>
                      <a>{ req.title }</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(BooksPage)
