import { Tag as AntTag } from 'antd';
import colors from 'styles/colors';
import styled from 'styled-components';

const Tag = styled(AntTag)`
  &.ant-tag {
    border: 0;
    padding: 6px 12px;
    background: ${colors.primary};
    border-radius: 9px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    margin-bottom: 6px;

    .anticon.anticon-close {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      margin-left: 12px;
      padding: 6px;
      color: white;
    }
  }
`;

export default Tag;
