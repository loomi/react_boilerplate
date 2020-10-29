import React from 'react';
import { Button } from 'antd';
import { useAuth } from 'contexts/AuthProvider';

function SidebarLogout() {
  const { logout } = useAuth();

  return (
    <Button
      block
      size="large"
      type="text"
      onClick={logout}
    >
      Sair
    </Button>
  );
}

export default SidebarLogout;
