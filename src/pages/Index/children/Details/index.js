import React from 'react'
import { withRouter } from "react-router-dom";
import './style.less'

class Details extends React.Component {
  render() {
    return (
      <div className='home'>
        PC端--第二个页面
      </div>
    )
  }
}
export default withRouter(Details)
