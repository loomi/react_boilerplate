import React from 'react';
import SidebarLogout from './SidebarLogout';
import { StyledSidebarFooter } from './Sidebar.style';

function SidebarFooter() {
  return (
    <StyledSidebarFooter>
      <SidebarLogout />
    </StyledSidebarFooter>
  );
}

export default SidebarFooter;
