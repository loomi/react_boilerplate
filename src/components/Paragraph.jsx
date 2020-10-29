import styled from 'styled-components';
import {
  system, space, typography, fontSize, color, fontWeight,
} from 'styled-system';

const Paragraph = styled.div(
  color,
  space,
  fontSize,
  typography,
  fontWeight,
  system({
    textTransform: true,
  }),
);

export default Paragraph;
