import styled from 'styled-components';
import { Row, Tabs } from 'antd';

export const StyledPageTabs = styled(Row)`
  h2.ant-typography {
    margin-right: ${({ theme }) => `${theme.space[5]}px`}
  }
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs {
    &-tab, &-tab-btn {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: ${({ theme }) => `${theme.fontSizes[3]}px`};
      padding: 0;
    }
  }
`;

StyledTabs.defaultProps = {
  size: 'large',
};

export default ({
  PageTabs: StyledPageTabs,
  Tabs: StyledTabs,
});
