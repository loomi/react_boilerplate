import React from 'react';
import { Form } from 'antd';
import { useField } from 'formik';

function InputBase({
  component: Component,
  label,
  ...props
}) {
  const [field, meta] = useField(props);
  const { error, touched } = meta;

  const hasError = touched && error;

  return (
    <Form.Item
      label={label}
      labelCol={{ span: 24 }}
      validateStatus={hasError && 'error'}
      help={hasError && error}
    >
      <Component {...field} {...props} />
    </Form.Item>
  );
}

export default InputBase;
