import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledSidebar = styled(Layout.Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    position: fixed;
    max-width: 260px;
    min-width: 260px;
  }

  .ant-menu { flex: 1; }

  .ant-menu-item {
    font-weight: bold;
    font-size: 1.05rem;
    height: auto;
    display: flex;
    align-items: center;
    line-height: 3.5rem;
    margin-bottom: 0 !important;

    .anticon {
      font-size: 1.25rem;
      margin-right: 1.5rem;
    }

    &.ant-menu-item-selected {
      background-color: transparent;
    }

    &::after {
      border-width: 0.4rem;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
  }
`;

export const StyledSidebarFooter = styled.div`
  height: 8rem;
  /* Add background asset */
  margin-top: 50px;
  .ant-btn {
    font-weight: 'bold';
    font-size: 1.05rem;
  }
`;

export default ({
  Sidebar: StyledSidebar,
});
