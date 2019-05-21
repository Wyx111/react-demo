import React, { Component } from 'react';
import Top from './components/Top';
import Center from './components/Center';
import './index.css';
class Business extends Component {
  render() {
    return (
      <div>
        <Top />
        <Center />
      </div>
    );
  }
}

export default Business;
