import React from 'react';
import { Row } from 'antd';
import Logo from 'components/Logo';

const SidebarLogo = () => (
  <Row align="middle" justify="center" style={{ height: 140 }}>
    <Logo
      color="default"
      size="80px"
    />
  </Row>
);

export default SidebarLogo;
