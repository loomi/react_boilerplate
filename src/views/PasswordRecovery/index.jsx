import React, { useState } from 'react';
import LayoutAuth from 'components/LayoutAuth/LayoutAuth';
import {
  Form, Input, Button, message,
} from 'antd';
import Text from 'antd/lib/typography/Text';
import { AuthAPI } from 'api';

function PasswordRecovery({ history }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const textStyle = {
    color: '#5F6979', fontWeight: '1.286em',
  };

  const btnStyle = { display: 'block', margin: '0 auto' };

  const handleSubmit = async () => {
    const res = await AuthAPI.sendRedifineEmail({ email });
    const { status } = res;
    if (status === 200) {
      message.success('E-mail enviado com sucesso!');
      setSubmitted(true);
    } else {
      message.error('Erro ao enviar o e-mail');
    }
  };

  return (
    <LayoutAuth
      title="Redefinir a senha"
    >
      {submitted ? (
        <>
          <Text style={textStyle}>
            Você recebeu um link para redifinição de senha no seu e-mail,
            acesse este link para finalizar o processo
          </Text>
          <Button className="ant-btn-primary" style={{ ...btnStyle, margin: '2.5em auto' }} onClick={() => history.push('/login')}>Voltar para o login</Button>
        </>
      ) : (
        <>
          <Text style={textStyle}>Informe o e-mail para o qual você deseja redefinir a senha</Text>
          <Form style={{ padding: '2.5em 0' }} layout="vertical">
            <Form.Item label="E-mail">
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
          </Form>
          <Button className="ant-btn-primary" style={{ float: 'right' }} onClick={() => handleSubmit()}>Enviar</Button>
          <Button className="ant-btn-primary" onClick={() => history.push('/login')}>Voltar para o login</Button>
        </>
      )}

    </LayoutAuth>
  );
}

export default PasswordRecovery;
