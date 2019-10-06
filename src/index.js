import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import store from './store'

ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={zh_CN}>
      <Provider {...store}>
        <App/>
      </Provider>
    </ConfigProvider>
  </HashRouter>,
  document.getElementById('root')
);
