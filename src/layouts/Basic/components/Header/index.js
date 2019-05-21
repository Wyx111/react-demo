import React from 'react';
import './index.css';
import { Icon } from 'antd';
const Header = () => {
  return (
    <div className="header">
      <a href="www.baidu.com" className="header-left-title">
        数据监控系统
      </a>
      <span className="header-right-name">
        <span className="header-right-welcome">欢迎：</span>
        张三 <Icon type="down" className="header-right-select" />{' '}
      </span>
    </div>
  );
};
export default Header;
