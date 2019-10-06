import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from 'src/components/LoadableComponent'
import PrivateRoute from 'src/components/PrivateRoute'

const Home = LoadableComponent(()=>import('src/pages/Mobile/children/Home/index'));
const Details = LoadableComponent(()=>import('src/pages/Mobile/children/Details/index'));

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/mobile-index' component={ Home }/>
          <PrivateRoute exact path='/mobile-index/details' component={ Details }/>
          <Redirect exact from='/' to='/mobile-index'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain
