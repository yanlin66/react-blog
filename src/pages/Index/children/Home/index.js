import React from 'react'
import { withRouter,Link } from "react-router-dom";
import banner from 'src/assets/img/banner.jpg'
import './style.less'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className="headerBar_v1">
          <a className="icon-emo-devil" href="/">寻彦不悔</a>
          <div className="buttons">
            <Link to={"/"} className="active">
              驿站
              <i></i>
            </Link>
            <Link to={"/"}>
              思过崖
              <i></i>
            </Link>
            <Link to={"/"}>
              武林秘籍
              <i></i>
            </Link>
            <Link to={"/"}>
              华山论剑
              <i></i>
            </Link>
            <Link to={"/"}>
              小茅屋
              <i></i>
            </Link>
          </div>
        </div>
        <div className="main_v1">
          <div className="banner_warp">
            <img src={banner} alt="" />
            <div className="img_mask">
              <h2 className="entry-title">Welcome to IT 武林秀场</h2>
            </div>
          </div>
          <div className="recent_warp">
            <div className="recent_warp_l">
              <div className="recemt_title">热点推荐</div>
              <div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2019-08-29
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 3.2版本（响应式） </p>
                  </div>
                </div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2018-02-24
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 2.2版本（响应式） </p>
                  </div>
                </div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2017-12-15
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 2.1版本上线 </p>
                  </div>
                </div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2019-08-29
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 3.2版本（响应式） </p>
                  </div>
                </div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2018-02-24
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 2.2版本（响应式） </p>
                  </div>
                </div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2017-12-15
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 2.1版本上线 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent_warp_r">
              <div className="recemt_title">站内信息</div>
              <div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2019-08-29
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 3.2版本（响应式） </p>
                  </div>
                </div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2018-02-24
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 2.2版本（响应式） </p>
                  </div>
                </div>
                <div className="post-wrap">
                  <h3><a href="">更新迭代</a></h3>
                  <p className="post-date icon-calendar">
                    2017-12-15
                  </p>
                  <div className="post-desc">
                    <p>
                      www.palpitation.shop 2.1版本上线 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Home)
