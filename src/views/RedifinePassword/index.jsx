import React, { useState } from 'react';
import LayoutAuth from 'components/LayoutAuth/LayoutAuth';
import {
  Form, Input, Button, message,
} from 'antd';
import { Redirect } from 'react-router-dom';
import { AuthAPI } from 'api';
import { useAuth } from 'contexts/AuthProvider';

function RedifinePassword({ history, location }) {
  const { login } = useAuth();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [redirect, setRedirect] = useState();

  const queryParams = location.search;
  const params = new URLSearchParams(queryParams);
  const token = params.get('token');

  const handleSubmit = async () => {
    if (password !== confirmedPassword) {
      message.error('As senhas estão diferentes');
    } else {
      const res = await AuthAPI.sendNewPassword({ token, password });
      if (res.status === 200) {
        message.success('Senha redefinida com sucesso!');
        await login({ email: res.data.email, password }).then(
          setRedirect({
            pathname: '/',
          }),
        );
      }
    }
  };

  if (redirect) { return <Redirect push to={redirect} />; }

  return (
    <LayoutAuth
      title="Redefinir a senha"
    >
      <>
        <Form style={{ padding: '2.5em 0' }} layout="vertical">
          <Form.Item label="Senha">
            <Input onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item label="Confirme sua senha">
            <Input onChange={(e) => setConfirmedPassword(e.target.value)} />
          </Form.Item>
        </Form>
        <Button className="ant-btn-primary" style={{ float: 'right' }} onClick={() => handleSubmit()}>Enviar</Button>
        <Button className="ant-btn-primary" onClick={() => history.push('/login')}>Voltar para o login</Button>
      </>
    </LayoutAuth>
  );
}

export default RedifinePassword;
