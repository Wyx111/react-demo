import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'antd';
import Footer from './components/Footer';
import Intro from './components/Intro';
import './index.css';
import routerData from '../../Router.js';
export default class User extends Component {
  render() {
    return (
      <div className="container">
        <div className="intro" />
        <Row>
          <Col span={12} className="col">
            <Intro />
          </Col>
          <Col span={12} className="col">
            <Switch>
              {routerData.map((item, index) => {
                return item.component ? (
                  <Route
                    key={index}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                ) : null;
              })}
            </Switch>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}
