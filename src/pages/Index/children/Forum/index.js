import React from 'react'
import { withRouter } from "react-router-dom";
import './style.less'

class ForumPage extends React.Component {
  render() {
    return (
      <div className='forum-page'>
        华山论剑
      </div>
    )
  }
}
export default withRouter(ForumPage)
