//路由规则解析 （path-to-regexp）
import React from 'react';
import HomePage from './components/Home'
import IDPage from './components/ID'
import UsersPage from './components/Users'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <ul>
      <li><Link to="/a-b3">Home</Link></li>
      <li><Link to="/54">ID</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
    <main>
      <Switch>
        <Route path="/:id(\d+)" exact component={IDPage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/*-*" exact component={HomePage} />
      </Switch>
    </main>
  </div>
)

export default () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)
