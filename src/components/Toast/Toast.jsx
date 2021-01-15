import React from 'react';
import { toast } from 'react-toastify';
import { StyledToast } from './Toast.styled';
import Message from './Message';

export const showToast = ({
  title,
  text,
  error,
  content,
}) => (
  error ? (
    toast.error(
      <Message
        title={title}
        text={text}
        error={error}
      >
        {content}
      </Message>,
      { error: true },
    )
  ) : (
    toast(
      <Message
        title={title}
        text={text}
        error={error}
      >
        {content}
      </Message>,
      { error: true },
    )
  )
);

const Toast = () => (
  <StyledToast
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export default Toast;
