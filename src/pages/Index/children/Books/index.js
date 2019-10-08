import React from 'react'
import { withRouter } from "react-router-dom";
import './style.less'

class BooksPage extends React.Component {
  render() {
    return (
      <div className='books-page'>
        武林秘籍
      </div>
    )
  }
}
export default withRouter(BooksPage)
