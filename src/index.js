import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.jsx';
import './common/styles/common.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
