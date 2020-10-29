import React from 'react';
import { Menu } from 'antd';
import { useRouteMatch } from 'react-router-dom';

import * as Icons from 'components/icons';
import SidebarMenuItem from './SidebarMenuItem';

function SidebarMenu() {
  const { params } = useRouteMatch();
  const [selectedKey] = Object.values(params);

  return (
    <Menu theme="light" defaultSelectedKeys={[selectedKey]} mode="inline">
      <SidebarMenuItem
        key="/"
        path="/"
        label="Dashboard"
        icon={Icons.DashboardOutlined}
      />

      <SidebarMenuItem
        key="/users"
        path="/users"
        label="Usuários"
        icon={Icons.UsersOutlined}
      />
    </Menu>
  );
}

export default SidebarMenu;
