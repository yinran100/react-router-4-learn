// ID组件
import React from 'react';

export const IDPage = ({match}) => <div>
  ID Page(router-macth):
  <span className="parmas">{JSON.stringify(match)}</span>
</div>