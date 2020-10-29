import React from 'react';
import { Input } from 'antd';

import InputBase from './InputBase';

const PasswordField = (props) => (
  <InputBase {...props} component={Input.Password} />
);

export default PasswordField;
