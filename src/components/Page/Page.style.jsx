import styled from 'styled-components';
import { space } from 'styled-system';
import { Layout } from 'antd';

export const StyledPage = styled(Layout.Content)(space);

StyledPage.defaultProps = {
  padding: [4, 4, 4, 5],
};

export default ({
  Page: StyledPage,
});
