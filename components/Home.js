// Home组件
import React from 'react';

export default ({match}) => <div>
  Home Page(props.match):
  <span className="parmas">{JSON.stringify(match)}</span>
</div>