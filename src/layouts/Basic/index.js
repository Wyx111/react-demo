import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import routerData from '../../BodyRouter.js';
export default class Basic extends Component {
  render() {
    return (
      <div className="body-header">
        <Header />
        <Navigation />
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
        <Footer />
      </div>
    );
  }
}
