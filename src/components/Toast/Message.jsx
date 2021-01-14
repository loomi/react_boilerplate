import React from 'react';

import Styled from './Toast.styled';

const {
  MessageRow,
  MessageContainer,
  Title,
  Divider,
  Text,
} = Styled;

function Message(props) {
  const {
    title,
    text,
    error,
    children,
  } = props;
  return (
    <MessageRow>
      <MessageContainer>
        <Title error={error}>{title}</Title>
        <Divider />
        <Text>{text}</Text>
        {children}
      </MessageContainer>
    </MessageRow>
  );
}

export default Message;
