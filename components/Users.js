// Users组件
import React from 'react';

export const UsersPage = ({match}) => <div>
  Users Page(router-macth):
  <span className="parmas">{JSON.stringify(match)}</span>
</div>