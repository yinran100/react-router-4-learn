//v4 动态路由
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
)

// Home组件
const HomePage =() => <div>Home Page</div>
// User组件
const UsersPage = () => <div>Users Page</div>

export default () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)
