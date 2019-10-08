import React from 'react'
import { withRouter } from "react-router-dom";
import './style.less'

class SelfPage extends React.Component {
  render() {
    return (
      <div className='self-page'>
        小茅屋
      </div>
    )
  }
}
export default withRouter(SelfPage)
