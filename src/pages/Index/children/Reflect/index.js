import React from 'react'
import {inject, observer} from "mobx-react";
import { withRouter } from "react-router-dom";
import './style.less'

@inject("IndexCommon")
@observer
class ReflectPage extends React.Component {
  state = {
    reflect:[
      {

      }
    ],
    CaseTypeList:[
      {
        id:6,
        name:"官网主页"
      },
      {
        id:7,
        name:"后台管理系统开发"
      },
      {
        id:8,
        name:"云平台开发"
      },
      {
        id:9,
        name:"线上电商开发"
      },
      {
        id:10,
        name:"微信公众号开发"
      },
      {
        id:11,
        name:"混合H5开发"
      }
    ],
    CaseTimeCycleList:[
      {
        id:'Y',
        name:"年"
      },
      {
        id:'J',
        name:"季度"
      },
      {
        id:'W',
        name:"周"
      }
    ]
  };

  componentDidMount() {

  }

  getCaseType = (id) => {
    const { CaseTypeList } = this.state;
    return (CaseTypeList.length) && CaseTypeList.find(e => e.id === id)
  };
  getCaseTimeCycleType = (id) => {
    const { CaseTimeCycleList } = this.state;
    return (CaseTimeCycleList.length) && CaseTimeCycleList.find(e => e.id === id)
  };

  render() {
    const { Reflect } = this.props.IndexCommon;
    return (
      <div className='reflect-page'>
        <div className="c-title">奋力追寻技术的革新脚步,走在未来</div>
        <div className="customer-wrap">
          <div className="customer-main">
            {
              (Reflect.length > 0) && Reflect.map(req => {
                return (
                  <a key={req.id}>
                    <div className="c-child-time">{req.case_start_time}</div>
                    <div className="c-child-warp">
                      <div className='c-child-title'>{req.case_name} <span>评价：{req.case_grade}星</span></div>
                      <div className="c-child-grade">
                        {req.case_assess}
                        <span>
                          { this.getCaseType(req.case_type).name }
                        </span>
                      </div>
                      <div className="c-child-grade">
                        时间周期：{req.case_time_cycle}{ this.getCaseTimeCycleType(req.case_time_cycle_type).name }
                        <span>团队规模：{req.case_people_num} 人</span>
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(ReflectPage)
