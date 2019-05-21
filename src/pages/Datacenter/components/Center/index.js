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

var echartsOption1 = {
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
class BusinessCard extends Component {
  render() {
    return (
      <div className="newactivities Datacenter">
        <Row>
          <Col span={12}>
            <div className="newactivities-left-1">最新发布活动</div>
            <div className="newactivites-left-echarts">
              <ReactEcharts
                style={style.height}
                ref={e => {
                  this.echartsElement = e;
                }}
                option={echartsOption1}
                theme="clear"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="newactivities-left-1">最新发布活动</div>
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
