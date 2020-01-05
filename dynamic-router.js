//v4 动态路由
import React from 'react';
import HomePage from './components/Home'
import UsersPage from './components/Users'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App（动态路由）
    </header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/mine">Mine</Link></li>
      <li><Link to="/mine/users">Users</Link></li>
    </ul>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/mine" component={MinePage} />
    </main>
  </div>
)
const MinePage = ({match}) => <div>
  Mine Page :
  >>>>>>>>>>>>>
  <Route path={match.path + '/users'} component={UsersPage} />
</div>
export default () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)
