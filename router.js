//BrowserRouter和HashRouter示例
import React from 'react';
import HomePage from './components/Home'
import IDPage from './components/ID'
import UsersPage from './components/Users'
import {
  BrowserRouter as Router, 
  // HashRouter as Router,
  Route, Link, Switch, Redirect } from 'react-router-dom'

// <Redirect from="/id" to="/abc" push/>

const swicthRouter = () => {
  return <>
      <Route path="/" exact component={HomePage} />
      <Route path="/:users" exact render={(props) => <UsersPage {...props} />} />
      <Route path={["/id", "/abc"]} exact render={(props) => <IDPage {...props} />} />
      
  </>
}

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      BrowserRouter和HashRouter示例
    </header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/id">ID</Link></li>
    </ul>
    <main>
      {
        swicthRouter()
      }
    </main>
  </div>
)

export default () => (
  <Router
    // basename="/inke"
    // hashType="noslash"
    // children={onlyChild}
    // forceRefresh={true}
    // getUserConfirmation={getConfirmation('Are you sure?')}
    >
    <PrimaryLayout />
  </Router>
)

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  // callback && callback(allowTransition)
}
const onlyChild = <div>onlyChild</div>