import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react/index";
import "./style.less";
@withRouter
@inject("IndexCommon")
@observer
class isPlatform extends Component {
  state = {
    focusItem: -1
  };

  isPC = () => {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    // eslint-disable-next-line array-callback-return
    Agents.map(req => {
      if (userAgentInfo.indexOf(req) > 0) {
        flag = false;
      }
    });
    sessionStorage.setItem( 'isPlatform' , flag ? 'pc' : 'mobile' );
    return flag;
  };

  goRouter = () => {
    (this.isPC())?this.props.history.push('/index'):this.props.history.push('/mobile-index');
  };

  componentDidMount() {
    this.goRouter();
  }

  render() {
    return (
      <div className='go-switch' />
    );
  }
}
export default isPlatform;
