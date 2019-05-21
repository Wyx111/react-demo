import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css';
import { Row, Col } from 'antd';
class BusinessCard extends Component {
  render() {
    return (
      <div className="business-card">
        <Row>
          <Col span={8} className="business-card-col">
            <div className="business-img">
              <Icon type="aliwangwang" />
            </div>
            <div>
              <div className="business-card-1">最新发布活动数</div>
              <div className="business-card-2">3,341</div>
              <div className="business-card-3">累计 232,434周同比 26%</div>
            </div>
          </Col>
          <Col span={8} className="business-card-col">
            <div className="business-img">
              <Icon type="aliwangwang" />
            </div>
            <div>
              <div className="business-card-1">最新发布活动数</div>
              <div className="business-card-2">3,341</div>
              <div className="business-card-3">累计 232,434周同比 26%</div>
            </div>
          </Col>
          <Col span={8} className="business-card-col">
            <div className="business-img">
              <Icon type="aliwangwang" />
            </div>
            <div>
              <div className="business-card-1">最新发布活动数</div>
              <div className="business-card-2">3,341</div>
              <div className="business-card-3">累计 232,434周同比 26%</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BusinessCard;
