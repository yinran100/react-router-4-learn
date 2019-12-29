import React, { Component } from 'react';
import { render } from 'react-dom';
import StaticRouter from './static-router.js'; // 静态路由
import DynamicRouter from './dynamic-router.js'; // 动态路由
import './style.css';

// render(<StaticRouter />, document.getElementById('root')); // 静态路由

render(<DynamicRouter />, document.getElementById('root'));

