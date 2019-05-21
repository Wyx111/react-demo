import React, { Component } from 'react';
import './index.css';
import { Row, Col } from 'antd';
class TrafficCard extends Component {
  render() {
    return (
      <div className="traffic-card">
        <div className="traffic-title">基本指标</div>
        <Row>
          <Col span={6} className="business-card-col">
            <div className="business-img" />
            <div>
              <div className="traffic-card-1">昨日 UV</div>
              <div className="traffic-card-2">36,657</div>
              <div className="traffic-card-3">较前日 -200近7天 +100</div>
            </div>
          </Col>
          <Col span={6} className="business-card-col">
            <div className="business-img" />
            <div>
              <div className="traffic-card-1">昨日 UV</div>
              <div className="traffic-card-2">36,657</div>
              <div className="traffic-card-3">较前日 -200近7天 +100</div>
            </div>
          </Col>
          <Col span={6} className="business-card-col">
            <div className="business-img" />
            <div>
              <div className="traffic-card-1">本周截至昨日活跃用户</div>
              <div className="traffic-card-2">36,657</div>
              <div className="traffic-card-3">较前日 -200近7天 +100</div>
            </div>
          </Col>
          <Col span={6} className="business-card-col">
            <div className="business-img" />
            <div>
              <div className="traffic-card-1">本周截至昨日活跃用户</div>
              <div className="traffic-card-2">36,657</div>
              <div className="traffic-card-3">较前日 -200近7天 +100</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TrafficCard;
