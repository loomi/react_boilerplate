import { Typography } from 'antd';
import { space, fontSize } from 'styled-system';
import styled from 'styled-components';

export const StyledPageSubtitle = styled(Typography.Text)`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    margin-top: 0.3rem;
    margin-left: ${({ theme }) => `${theme.space[5]}px`};
    background: ${({ color, theme }) => (theme.colors[color] || color)};
  }

  ${space}
  ${fontSize}
`;

StyledPageSubtitle.defaultProps = {
  strong: true,
  mt: 4,
  mb: 4,
  fontSize: 2,
  color: 'primary',
};

export default ({
  PageSubtitle: StyledPageSubtitle,
});
