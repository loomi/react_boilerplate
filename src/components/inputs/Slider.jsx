import React from 'react';
import { Slider as AntSlider } from 'antd';

import InputBase from './InputBase';

const Slider = (props) => (
  <InputBase {...props} component={AntSlider} />
);

export default Slider;
