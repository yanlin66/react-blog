import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { _util } from 'src/utils'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      _util().isPlatform() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/isPlatform'
          }}
        />
      )
    }
  />
);

export default PrivateRoute
