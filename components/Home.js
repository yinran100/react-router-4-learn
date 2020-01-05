// Home组件
import React from 'react';

export const HomePage = ({match}) => <div>
  Home Page(router-macth):
  <span className="parmas">{JSON.stringify(match)}</span>
</div>