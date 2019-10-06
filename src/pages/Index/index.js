import React from 'react'
import { Layout } from 'antd'
import ContentMain from 'src/pages/Index/Components/ContentMain'
import './style.less'

const {  Content } = Layout;
class Index extends React.Component {
  state = {

  };

  render() {
    return (
      <div id="page">
        <Layout>
          <Content>
            <ContentMain />
          </Content>
        </Layout>
      </div>
    )
  }
}
export default Index
