import React, { useEffect } from 'react';
import * as NProgressComp from 'nprogress';
import { createGlobalStyle } from 'styled-components';
import 'nprogress/nprogress.css';
import colors from 'styles/colors';

export const GlobalNProgressOverride = createGlobalStyle`
  #nprogress .bar {
    background: ${colors.primary} !important;
  }

  #nprogress .peg {
    box-shadow:
      0 0 10px ${colors.primary},
      0 0 5px ${colors.primary} !important
    ;
  }
`;

const NProgress = () => {
  useEffect(() => {
    NProgressComp.start();
    return () => {
      NProgressComp.done();
    };
  }, []);

  return <GlobalNProgressOverride />;
};

export default NProgress;
