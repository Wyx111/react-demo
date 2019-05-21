import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import BusinessCard from './components/Card';
import Newactivities from './components/Newactivities';
import NewUsers from './components/NewUsers';
import './index.css';
class Business extends Component {
  render() {
    return (
      <div>
        <BusinessCard />
        <Newactivities />
        <NewUsers />
      </div>
    );
  }
}

export default Business;
