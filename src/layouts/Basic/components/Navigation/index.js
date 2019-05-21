import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends Component {
  state = {
    current: 'business',
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className="navigation-body">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="business">
            <Link to="/business">业务概览</Link>
          </Menu.Item>
          <Menu.Item key="traffic">
            <Link to="/traffic">流量分析</Link>
          </Menu.Item>
          <Menu.Item key="userstatic">
            <Link to="/userstatic">用户分析</Link>
          </Menu.Item>
          <Menu.Item key="activities">
            <Link to="/activities">留存于活跃</Link>
          </Menu.Item>
          <Menu.Item key="datacenter">
            <Link to="/datacenter">数据中心</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default Navigation;
