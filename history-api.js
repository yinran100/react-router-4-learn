//history API 展示
import React from 'react';
import UsersPage from './components/Users'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class HomePage extends React.Component {
  componentDidMount(){
    console.log('HomePage:', this.props)
  }
  render(){
    const { match, history } = this.props
    return <div>
      Home Page:
      <ul>
        <li onClick={() => history.replace('/mine')}>Mine</li>
        <li onClick={() => history.replace('/users')}>Users</li>
      </ul>
    </div>
  }
}

class MinePage extends React.Component {
  componentDidMount(){
    console.log('MinePage:', this.props)
  }
  render(){
    const { match, history } = this.props
    return <div>
      Mine Page:
      <ul>
        <li onClick={() => history.replace({
          pathname:'/users',
          state:{
            a: 23
          }
        })}>Users</li>
      </ul>
    </div>
  }
}

class UserPage extends React.Component {
  componentDidMount(){
    console.log('UserPage:', this.props)
  }
  render(){
    const { match, history } = this.props
    return <div>
      User Page:
      <ul>
        <li onClick={() => history.replace('/mine')}>Mine</li>
      </ul>
    </div>
  }
}
const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App（动态路由）
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/mine" exact component={MinePage} />
      <Route path="/users" exact component={UserPage} />
    </main>
  </div>
)

export default () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)
