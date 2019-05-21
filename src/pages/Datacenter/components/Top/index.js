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

var colorArr1 = [
  '#1890ff',
  '#2fc25b',
  '#facc14',
  '#223273',
  '#8543e0',
  '#13c2c2',
  '#3436c7',
  '#f04864',
];
var echartsOption1 = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['天海湾', '鼎龙湾', '珍珠湾', '翠逸家园', '紫林湾'], //需要对应 series 的 name值
  },
  color: colorArr,
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        //由于颜色的原因，这里应该对数据做一下排序~
        { value: 1548, name: '天海湾' },
        { value: 510, name: '鼎龙湾' },
        { value: 338, name: '珍珠湾' },
        { value: 265, name: '翠逸家园' },
        { value: 220, name: '紫林湾' },
      ],
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
                option={echartsOption}
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
                option={echartsOption1}
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
