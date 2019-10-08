import React from 'react'
import { Link } from "react-router-dom";
import { Layout } from 'antd'
import ContentMain from 'src/pages/Index/Components/ContentMain'
import './style.less'

const {  Content } = Layout;
class IndexLayout extends React.Component {
  state = {
    routerList:[
      {
        id:1,
        name:'驿站',
        link:'/index'
      },
      {
        id:2,
        name:'思过崖',
        link:'/index/reflect'
      },
      {
        id:3,
        name:'武林秘籍',
        link:'/index/books'
      },
      {
        id:4,
        name:'华山论剑',
        link:'/index/forum'
      },
      {
        id:5,
        name:'小茅屋',
        link:'/index/self'
      }
    ],
    codeType:false,
    scrollActive:false
  };

  componentDidMount() {
    // 挂载滚动监听
    window.addEventListener('scroll', this.bindScroll)
  }

  componentWillUnmount() {
    // 移除滚动监听
    window.removeEventListener('scroll', this.bindScroll);
  }

  bindScroll = (event) => {
    const { codeType } = this.state;
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 判断距离页面底部的高度
    if (scrollTop >= 80) {
      // 判断执行回调条件
      if (codeType) {
        // 关闭判断执行开关
        this.setState(
          {
            codeType: false,
            scrollActive:true
          }
        );
      }
    } else {
      // 打开判断执行开关
      this.setState({
        codeType: true,
        scrollActive:false
      });
    }
  };

  getRouter = () => {
    const { routerList } = this.state;
    let id = 1;
    // eslint-disable-next-line array-callback-return
    routerList.map(req => {
      if(req.link === this.props.location.pathname){
        id = req.id
      }
    });
    return id
  };

  render() {
    const { routerList,scrollActive } = this.state;
    return (
      <div id="page">
        <Layout>
          <div className="headerBar_v1" style={{backgroundColor:(scrollActive?'#ccc':'rgba(245, 245, 245, 0.8)')}}>
            <a className="icon-emo-devil" href="/">寻彦不悔</a>
            <div className="buttons">
              {
                routerList.length && routerList.map(req => {
                  return (
                    <Link
                      key={ req.id }
                      to={ req.link }
                      className={ (req.id === this.getRouter()) ? "active" : ''} >
                      { req.name }
                      <i />
                    </Link>
                  )
                })
              }
            </div>
          </div>
          <Content className='index-warp'>
            <ContentMain />
          </Content>
        </Layout>
      </div>
    )
  }
}
export default IndexLayout
