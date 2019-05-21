import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css';
import { Row, Col } from 'antd';
var echartsOption = {};
var echartsOption = {
  title: {
    text: ' ',
    subtext: ' ',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'line', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  legend: {
    data: ['成交量'],
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
    },
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: [
        '天海湾',
        '鼎龙湾',
        '珍珠湾',
        '翠逸家园',
        '紫林湾',
        '田螺湾',
        '香海彼岸',
        '花城都汇',
        '天蕴皖',
        '珍珠湾',
        '翠逸家园',
        '紫林湾',
        '田螺湾',
        '香海彼岸',
      ],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '成交量',
      type: 'bar',
      data: [
        2100,
        909,
        7200,
        1232,
        4256,
        5409,
        1700,
        6232,
        3256,
        7900,
        1232,
        4256,
        5409,
        1700,
      ],
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' },
        ],
      },
      markLine: {
        data: [{ type: 'average', name: '平均值' }],
      },
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
class NewUsers extends Component {
  render() {
    const dataSource = getData();
    return (
      <div className="newactivities">
        <Row>
          <Col span={18} className="business-newactivities-col">
            <div class="newactivities-left-1">
              最新发布活动
              <span class="newactivities-left-2">
                本周发布活动数<a>123</a>
              </span>
              <span class="newactivities-left-2">
                上周发布活动数<a>2333</a>
              </span>
              <span class="newactivities-left-2">
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
export default NewUsers;
