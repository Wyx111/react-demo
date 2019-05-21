import React, { Component } from 'react';
import Card from './components/Card';
import SourceTable from './components/SourceTable';
import Trend from './components/Trend';
import './index.css';
class Business extends Component {
  render() {
    return (
      <div>
        <Card />
        <Trend />
        <SourceTable />
      </div>
    );
  }
}

export default Business;
