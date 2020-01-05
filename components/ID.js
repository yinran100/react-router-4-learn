// ID组件
import React from 'react';

export default ({match}) => <div>
  ID Page(props.match):
  <span className="parmas">{JSON.stringify(match)}</span>
</div>