import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const SidebarMenuItem = ({
  path, label, icon: Icon, ...props
}) => (
  <Menu.Item key={path} icon={<Icon />} {...props}>
    <NavLink to={path}>{label}</NavLink>
  </Menu.Item>
);

export default SidebarMenuItem;
