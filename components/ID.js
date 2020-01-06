// ID组件
import React from 'react';

export default class ID extends React.Component {
  componentDidMount(){
    console.log('ID组件挂载')
  }
  render(){
    const { match } = this.props
    return <div>
    ID Page(props.match):
    <span className="parmas">{JSON.stringify(match)}</span>
  </div>
  }
}
