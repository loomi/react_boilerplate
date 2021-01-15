import React, {
  createContext,
  useContext,
} from 'react';

import Toast, { showToast } from 'components/Toast/Toast';

const ToastContext = createContext({
  toast: null,
});

function ToastProvider({ children }) {
  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);

export default ToastProvider;
