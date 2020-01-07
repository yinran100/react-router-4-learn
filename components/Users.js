// Users组件
import React from 'react';

export default class Users extends React.Component {
  componentDidMount(){
    console.log('User组件Props', this.props)
  }
  render(){
    const { match } = this.props
    return <div>
      Users Page(props.match):
      <span className="parmas">{JSON.stringify(match)}</span>
    </div>
  }
}
