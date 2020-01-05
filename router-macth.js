//路由规则解析 （path-to-regexp）
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <ul>
      <li><Link to="/54">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
    <main>
      <Switch>
        <Route path="/:id" exact component={HomePage} />
        // <Route path="/:id(\d+)" exact component={HomePage} />
        <Route path="/users" component={UsersPage} />
      </Switch>
    </main>
  </div>
)
// Home组件
const HomePage = ({match}) => <div>
  Home Page(router-macth):
  <span className="parmas">{JSON.stringify(match)}</span>
</div>
// User组件
const UsersPage = ({match}) => <div>
  Users Page(router-macth):
  <span className="parmas">{JSON.stringify(match)}</span>
</div>

export default () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)
