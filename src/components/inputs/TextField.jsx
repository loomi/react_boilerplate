import React from 'react';
import { Input } from 'antd';

import InputBase from './InputBase';

const TextField = (props) => (
  <InputBase {...props} component={Input} />
);

export default TextField;
