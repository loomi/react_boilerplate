import React from 'react';
import { Form, Checkbox as AntCheckbox } from 'antd';
import { useField } from 'formik';

function Checkbox({ label, ...props }) {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  const hasError = touched && error;

  return (
    <Form.Item
      labelCol={{ span: 24 }}
      validateStatus={hasError && 'error'}
      help={hasError && error}
    >
      <AntCheckbox {...field} {...props}>
        {label}
      </AntCheckbox>
    </Form.Item>
  );
}

export default Checkbox;
