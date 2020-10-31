/* eslint-disable max-len */
import React from 'react';

import { ButtonStyled } from './Button.style';

const Button = ({ children, ...props }) => (
  <ButtonStyled
    {...props}
  >
    { children }
  </ButtonStyled>
);

export default Button;

/*
  #### Button API #####

  ---- Props ----

  Prop / Typeof / Accepted Values / Description

  -> btnType / - or String / default, danger, salmon / Defines the type of the button (background and color)
  -> width / Number / 0 - 10 / Defines the width of the button
  -> suffixIcon / - or String / default / Defines the suffix icon for the button
  - prefixIcon / - or String / default / Defines the prefix icon for the button
  -> styled system { space } props
*/
