import React from 'react';
import { Input } from 'antd';

import InputBase from './InputBase';

const TextArea = (props) => (
  <InputBase {...props} component={Input.TextArea} />
);

export default TextArea;
