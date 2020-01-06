// Users组件
import React from 'react';

export default class Users extends React.Component {
  componentDidMount(){
    console.log('Users组件挂载')
  }
  render(){
    const { match } = this.props
    return <div>
      Users Page(props.match):
      <span className="parmas">{JSON.stringify(match)}</span>
    </div>
  }
}
