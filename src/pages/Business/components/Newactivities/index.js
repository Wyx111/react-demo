import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css';
import { Row, Col } from 'antd';
var echartsOption = {};
var colorArr = [
  '#1890ff',
  '#2fc25b',
  '#facc14',
  '#223273',
  '#8543e0',
  '#13c2c2',
  '#3436c7',
  '#f04864',
];
var echartsOption = {
  title: {
    text: ' ',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    //需要对应 series 的 name值
    data: ['天海湾', '鼎龙湾', '珍珠湾', '翠逸家园', '紫林湾'],
  },
  color: colorArr,
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      // saveAsImage: {} //存取为图片
    },
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '天海湾',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '鼎龙湾',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: '珍珠湾',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: '翠逸家园',
      type: 'line',
      stack: '总量',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: '紫林湾',
      type: 'line',
      stack: '总量',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};

let ary = [
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
  {
    name: '造物节',
  },
];
const getData = () => {
  let ary1 = [];
  ary.map((item, index) => {
    ary1.push(
      <Row key={index} className="business-newactivites-now-7-table-content">
        <Col span={12}>空间名称</Col>
        <Col span={12}>发布活动数</Col>
      </Row>,
    );
  });
  return ary1;
};
class BusinessCard extends Component {
  render() {
    const dataSource = getData();
    console.log(dataSource);
    return (
      <div className="newactivities">
        <Row>
          <Col span={18}>
            <div className="newactivities-left-1">
              最新发布活动
              <span className="newactivities-left-2">
                本周发布活动数<a>123</a>
              </span>
              <span className="newactivities-left-2">
                上周发布活动数<a>2333</a>
              </span>
              <span className="newactivities-left-2">
                累计发布活动数<a>2311111</a>
              </span>
            </div>
            <div className="newactivites-left-echarts">
              <ReactEcharts
                style={style.height}
                ref={e => {
                  this.echartsElement = e;
                }}
                option={echartsOption}
                theme="clear"
              />
            </div>
          </Col>
          <Col
            span={6}
            className="business-newactivites-now-7 business-newactivities-col"
          >
            <div className="business-newactivites-now-7-header">
              最近7日TOP 10
            </div>
            <div className="business-newactivites-now-7-table-header">
              <Row>
                <Col span={12}>空间名称</Col>
                <Col span={12}>发布活动数</Col>
              </Row>
            </div>
            {dataSource}
          </Col>
        </Row>
      </div>
    );
  }
}

const style = {
  height: {
    height: '400px',
  },
};
export default BusinessCard;
