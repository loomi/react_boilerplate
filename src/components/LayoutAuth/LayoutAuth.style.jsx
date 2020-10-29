import styled from 'styled-components';
import { Layout, Col, Row } from 'antd';

// import bgAuth from 'assets/bg-authentication.svg';
import colors from 'styles/colors';

export const StyledContent = styled(Layout.Content)`
  background-color: white;
`;

export const StyledWrapper = styled(Row)`
  height: 100vh;
`;

export const StyledLoginArea = styled(Col)`
`;

export const StyledBox = styled(Col)`
  max-width: 18rem;
  width: 90%;
`;

export const StyledTitle = styled.h3`
  color: ${colors.primaryDarker};
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 3rem;
  text-align: center;
`;

export default ({
  Content: StyledContent,
  LoginArea: StyledLoginArea,
  Box: StyledBox,
  Wrapper: StyledWrapper,
  Title: StyledTitle,
});
