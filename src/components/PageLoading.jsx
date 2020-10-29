import React from 'react';
import styled from 'styled-components';

import Spin from './Spin';

const StyledPageLoading = styled.div`
  width: 100vw;
  height: 100vh;
`;

const PageLoading = () => (
  <Spin size="large">
    <StyledPageLoading />
  </Spin>
);

export default PageLoading;
