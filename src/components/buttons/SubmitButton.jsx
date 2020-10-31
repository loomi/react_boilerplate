import React from 'react';
import { Form } from 'antd';
import { useField } from 'formik';

import Button from './Button';

function SubmitButton({
  children,
  ...props
}) {
  const [field, meta] = useField({ name: 'submit' });
  const { error, touched } = meta;

  const hasError = touched && error;

  return (
    <Form.Item
      labelCol={{ span: 24 }}
      validateStatus={hasError && 'error'}
      help={hasError && error}
    >
      <Button
        {...field}
        {...props}
      >
        {children}
      </Button>
    </Form.Item>
  );
}

export default SubmitButton;
