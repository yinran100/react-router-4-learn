// V3 静态路由
import React from 'react';
import HomePage from './components/Home'
import UsersPage from './components/Users'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'

const PrimaryLayout = props => (
  <div className="primary-layout">
    <header>
      Our React Router 3 App
    </header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
    <main>
      {props.children}
    </main>
  </div>
)

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </Route>
  </Router>
)
