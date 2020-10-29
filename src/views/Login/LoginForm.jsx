import React from 'react';
import { Form } from 'formik';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import Spacer from 'components/Spacer';
import Paragraph from 'components/Paragraph';
import TextField from 'components/inputs/TextField';
import PasswordField from 'components/inputs/PasswordField';
import validator, { email, Yup } from 'helpers/validator';

function LoginForm({ isSubmitting }) {
  return (
    <Form>
      <TextField name="email" label="E-mail" autocomplete="off" />
      <PasswordField name="password" label="Senha" />

      <Paragraph mt={4} textAlign="center">
        <Link to="/password-recovery">
          Esqueci minha senha
        </Link>
      </Paragraph>

      <Spacer mt={2} />

      <Button
        block
        size="large"
        type="primary"
        htmlType="submit"
        loading={isSubmitting}
      >
        Entrar
      </Button>
    </Form>
  );
}

export const loginFormValidationSchema = validator({
  email: email().required('Informe um e-mail'),
  password: Yup.string().required('Informe uma senha'),
});

export default LoginForm;
