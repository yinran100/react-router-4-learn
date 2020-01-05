//BrowserRouter和HashRouter示例
import React from 'react';
import HomePage from './components/Home'
import IDPage from './components/ID'
import UsersPage from './components/Users'
import {
  BrowserRouter as Router, 
  // HashRouter as Router,
  Route, Link, Switch } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      BrowserRouter和HashRouter示例
    </header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:users" component={UsersPage} />
      </Switch>
    </main>
  </div>
)

export default () => (
  <Router basename="/inke" 
    // getUserConfirmation={getConfirmation('Are you sure?')}
    >
    <PrimaryLayout />
  </Router>
)

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  // callback && callback(allowTransition)
}