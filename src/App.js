import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import isPlatform from "src/pages/isPlatform/index";
import PrivateRoute from "./components/PrivateRoute";
import { _util } from "src/utils";
import Index from 'src/pages/Index'
import mobileIndex from 'src/pages/Mobile'
import "./assets/font/iconfont.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/isPlatform" component={ isPlatform } />
        <PrivateRoute path="/" component={ _util().isPlatform() === 'pc' ? Index : mobileIndex } />
      </Switch>
    );
  }
}

export default App;
