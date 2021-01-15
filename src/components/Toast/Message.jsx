import React from 'react';

import {
  StyledMessageRow,
  StyledMessageContainer,
  StyledTitle,
  StyledDivider,
  StyledText
} from './Toast.styled';

const Message = ({
  title,
  text,
  error,
  children
})  => {
  return (
    <StyledMessageRow>
      <StyledMessageContainer>
        <StyledTitle error={error}>{title}</StyledTitle>
        <StyledDivider />
        <StyledText>{text}</StyledText>
        {children}
      </StyledMessageContainer>
    </StyledMessageRow>
  );
}

export default Message;
