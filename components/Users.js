// Users组件
import React from 'react';

export default ({match}) => <div>
  Users Page(props.match):
  <span className="parmas">{JSON.stringify(match)}</span>
</div>