import React, { useState } from 'react';
import { Formik } from 'formik';

import Components from 'components/index';
import { useAuth } from 'contexts/AuthProvider';
import { ALERT_SERVER_ERROR } from 'variables';
import LoginForm, { loginFormValidationSchema } from './LoginForm';



function Login() {
  const [feedback, setFeedback] = useState();
  const { login } = useAuth();

  const handleLogin = async (values) => {
    if (window.navigator.onLine) {
      try {
        setFeedback(null);
        await login(values);
      } catch (error) {
        if ('isAxiosError' in error) {
          if (!error.response) {
            setFeedback({
              type: 'error',
              message: 'Erro de conexão com o servidor',
            });
          }
          const { response: { statusText } } = error;
          if (statusText === 'Unauthorized') {
            setFeedback({
              type: 'warning',
              message: 'Usuário e/ou senha inválidos',
            });
            return;
          }
        }
        setFeedback(ALERT_SERVER_ERROR);
      }
    } else {
      setFeedback({
        type: 'error',
        message: 'Erro na conexão, verifique sua conexão a internet',
      });
    }
  };

  return (
    <Components.LayoutAuth
      title="Entrar na plataforma"
      feedback={feedback}
    >
      <Formik
        onSubmit={handleLogin}
        component={LoginForm}
        initialValues={{ email: '', password: '' }}
        validationSchema={loginFormValidationSchema}
      />
    </ Components.LayoutAuth>
  );
}

export default Login;
