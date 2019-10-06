import React from 'react'
import './style.less'
import ContentMain from "src/pages/Mobile/Components/ContentMain";

class Index extends React.Component {
  state = {
    collapsed: false
  };
  render() {
    return (
      <div id="page">
        <ContentMain />
      </div>
    )
  }
}
export default Index
