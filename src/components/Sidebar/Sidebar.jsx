import React from 'react';
import Styled from './Sidebar.style';
import SidebarFooter from './SidebarFooter';
import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';

function Sidebar() {
  return (
    <Styled.Sidebar theme="light" width={260}>
      <SidebarLogo />
      <SidebarMenu />
      <SidebarFooter />
    </Styled.Sidebar>
  );
}

export default Sidebar;
