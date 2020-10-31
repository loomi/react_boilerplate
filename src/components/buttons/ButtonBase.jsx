import React from 'react';
import { Button } from 'antd';

const ButtonBase = ({ children, ...props }) => (
  <Button
    {...props}
  >
    {children}
  </Button>
);

export default ButtonBase;
