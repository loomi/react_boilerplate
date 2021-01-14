import React from 'react';
import { Form } from 'formik';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { StyledParagraph, StyledSpacer } from './LoginForm.style';

import TextField from 'components/inputs/TextField';
import PasswordField from 'components/inputs/PasswordField';
import validator, { email, Yup } from 'helpers/validator';

function LoginForm({ isSubmitting }) {
  return (
    <Form>
      <TextField name="email" label="E-mail" autocomplete="off" />
      <PasswordField name="password" label="Senha" />

      <StyledParagraph>
        <Link to="/password-recovery">
          Esqueci minha senha
        </Link>
      </StyledParagraph>

      <StyledSpacer />

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
