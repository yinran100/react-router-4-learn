import React, { Component } from 'react';
import { render } from 'react-dom';
import StaticRouter from './static-router.js'; // 静态路由
import DynamicRouter from './dynamic-router.js'; // 动态路由
import RouterMacth from './router-macth.js'; // 路由参数匹配
import './style.css';

// render(<StaticRouter />, document.getElementById('root')); // 静态路由

// render(<DynamicRouter />, document.getElementById('root'));

render(<RouterMacth />, document.getElementById('root'));