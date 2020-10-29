import React from 'react';
import { Radio as AntRadio } from 'antd';

import InputBase from './InputBase';

const RadioGroup = (props) => (
  <InputBase {...props} component={AntRadio.Group} />
);

RadioGroup.Radio = AntRadio;
RadioGroup.RadioButton = AntRadio.Button;

export default RadioGroup;
