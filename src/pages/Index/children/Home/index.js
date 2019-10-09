import React from 'react'
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import banner from 'src/assets/img/banner.jpg'
import './style.less'

@inject("IndexCommon")
@observer
class Home extends React.Component {
  state = {

  };

  componentDidMount() {

  }

  render() {
    const { getFilterHistory,getFilterBooks } = this.props.IndexCommon;
    return (
      <div className='home'>
        <div className="main_v1">
          <div className="banner_warp">
            <img src={banner} alt="" />
            <div className="img_mask">
              <h2 className="entry-title">Welcome to IT 武林秀场</h2>
            </div>
          </div>
          <div className="recent_warp">
            <div className="recent_warp_l">
              <div className="recemt_title">最新推荐</div>
              <div>
                {
                  (getFilterBooks.length > 0) && getFilterBooks.map(req => {
                    return (
                      <div className="post-wrap" key={req.id}>
                        <h3><a href="">{req.title}</a></h3>
                        <p className="post-date icon-calendar">
                          {req.create_time}
                        </p>
                        <div className="post-desc">
                          <p>{req.brief}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="recent_warp_r">
              <div className="recemt_title">站内信息</div>
              <div>
                {
                  (getFilterHistory.length > 0) && getFilterHistory.map(req => {
                    return (
                      <div className="post-wrap" key={req.id}>
                        <h3><a href="">{req.title}</a></h3>
                        <p className="post-date icon-calendar">
                          {req.date}
                        </p>
                        <div className="post-desc">
                          <p>{req.detail}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Home)
