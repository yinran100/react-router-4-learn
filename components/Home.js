// Home组件
import React from 'react';

export default class Home extends React.Component {
  componentDidMount(){
    console.log('home组件挂载')
  }
  render(){
    const { match } = this.props
    // console.log('home组件渲染')
    return <div>
      Home Page(props.match):
      <span className="parmas">{JSON.stringify(match)}</span>
    </div>
  }
}
