import React from 'react'
import { withRouter,Link } from "react-router-dom";
import './style.less'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>移动端</h1>
        <br/>
        <p>
          <Link to={'/mobile-index/details'}>details</Link>
        </p>
      </div>
    )
  }
}
export default withRouter(Home)
