import styled from 'styled-components';
import { Form } from 'antd';

export const StyledSelectResource = styled(Form.Item)`
  .ant-input {
    margin-bottom: 8px;
  }

  .ant-list {
    &-bordered {
      overflow: hidden;
    }

    &-items {
      overflow: auto;
      max-height: 200px;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background: rgba(0, 0, 0, .5);
      }

      .ant-list-item:last-child {
        border-bottom: 0 !important;
      }
    }

    &-item {
      cursor: pointer;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
`;

export default ({
  SelectResource: StyledSelectResource,
});
