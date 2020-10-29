import React from 'react';
import { StyledPageSubtitle } from './PageSubtitle.style';

const PageSubtitle = ({ children, ...props }) => (
  <StyledPageSubtitle {...props}>
    {children}
  </StyledPageSubtitle>
);

export default PageSubtitle;
