import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import AuthProvider from './AuthProvider';
import ToastProvider from './ToastProvider';

function GlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export const withGlobalProvider = (Component) => (
  (props) => (
    <GlobalProvider>
      <Component {...props} />
    </GlobalProvider>
  )
);

export default GlobalProvider;
