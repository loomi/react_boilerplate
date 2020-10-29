import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import colors from 'styles/colors';
import { ReactComponent as Logo } from 'assets/logo.svg';

const brandColors = {
  default: colors.primary,
  light: colors.white,
  dark: colors.black,
};

const Logo = styled(Logo)`
  ${({ size }) => css`
    width: ${size || '4rem'};
    height: ${size || '4rem'};
  `};

  path, text {
    fill: ${({ color }) => brandColors[color] || brandColors.default} !important;
  }
`;

Logo.propTypes = {
  color: PropTypes.oneOf(
    Object.keys(brandColors),
  ),
  size: PropTypes.string,
};

Logo.defaultProps = {
  color: 'default',
  size: null,
};

export default Logo;
