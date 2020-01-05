// V3 静态路由
import React from 'react';
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

// Home组件
const HomePage =() => <div>Home Page</div>
// User组件
const UsersPage = () => <div>Users Page</div>

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </Route>
  </Router>
)
