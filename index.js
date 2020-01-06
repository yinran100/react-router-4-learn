import React, { Component } from 'react';
import { render } from 'react-dom';
// import Router from './static-router.js'; // 静态路由
// import Router from './dynamic-router.js'; // 动态路由
import Router from './router-macth.js'; // 路由参数匹配
// import Router from './router.js'; // HashRouter 和 BrowserRouter 
import './style.css';

render(<Router />, document.getElementById('root'));