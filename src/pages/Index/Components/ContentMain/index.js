import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from 'src/components/LoadableComponent'
import PrivateRoute from 'src/components/PrivateRoute'

const Home = LoadableComponent(()=>import('src/pages/Index/children/Home/index'));
const Details = LoadableComponent(()=>import('src/pages/Index/children/Details/index'));

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/index' component={Home}/>
          <PrivateRoute exact path='/index/details' component={ Details }/>
          <Redirect exact from='/' to='/index'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain
