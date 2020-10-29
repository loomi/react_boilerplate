import React from 'react';
import { Spin as AntSpin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const spinnerIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin
  />
);

const Spin = (props) => (
  <AntSpin indicator={spinnerIcon} {...props} />
);

export default Spin;
