import React from 'react';
import { Row, Alert } from 'antd';

import Logo from 'components/Logo';
import Styled from './LayoutAuth.style';

function LayoutAuth({ title, feedback, children }) {
  return (
    <Styled.Content>
      <Styled.Wrapper align="middle" justify="center">
        <Styled.LoginArea span={12}>
          <Row align="middle" justify="center">
            <Logo
              size="8rem"
              color="dark"
              className="auth-logo"
            />
          </Row>
          <Row align="middle" justify="center">
            <Styled.Box>
              <Styled.Title>{title}</Styled.Title>

              {feedback && (
                <Alert {...feedback} showIcon style={{ marginBottom: 24 }} />
              )}

              {children}
            </Styled.Box>
          </Row>
        </Styled.LoginArea>
      </Styled.Wrapper>
    </Styled.Content>
  );
}

export default LayoutAuth;
