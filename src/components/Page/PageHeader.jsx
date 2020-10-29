import React from 'react';
import { Typography } from 'antd';

const PageHeader = ({ title }) => (
  <Typography.Title level={2}>
    {title}
  </Typography.Title>
);

export default PageHeader;
