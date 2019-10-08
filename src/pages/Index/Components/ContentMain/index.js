import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from 'src/components/LoadableComponent'
import PrivateRoute from 'src/components/PrivateRoute'

const Home = LoadableComponent(()=>import('src/pages/Index/children/Home/index'));
const Reflect = LoadableComponent(()=>import('src/pages/Index/children/Reflect/index'));
const Books = LoadableComponent(()=>import('src/pages/Index/children/Books/index'));
const Forum = LoadableComponent(()=>import('src/pages/Index/children/Forum/index'));
const Self = LoadableComponent(()=>import('src/pages/Index/children/Self/index'));

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/index' component={Home}/>
          <PrivateRoute exact path='/index/reflect' component={ Reflect }/>
          <PrivateRoute exact path='/index/books' component={ Books }/>
          <PrivateRoute exact path='/index/forum' component={ Forum }/>
          <PrivateRoute exact path='/index/self' component={ Self }/>
          <Redirect exact from='/' to='/index'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain
