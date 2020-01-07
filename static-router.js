// V3 静态路由
import React from 'react';
import HomePage from './components/Home'
import UsersPage from './components/Users'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'

const PrimaryLayout = props => (
  <div className="primary-layout">
    <header>
      Our React Router 3 App（静态路由）
    </header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/mine">Mine</Link></li>
      <li><Link to="/mine/users">Users</Link></li>
    </ul>
    <main>
      {props.children}
    </main>
  </div>
)
const MinePage = props => <div>
  Mine Page :
  >
  <br/>
  {
    props.children
  }
</div>

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomePage} />
      <Route path="/mine" component={MinePage} >
        <Route path=":users" component={UsersPage} />
      </Route>
    </Route>
  </Router>
)
