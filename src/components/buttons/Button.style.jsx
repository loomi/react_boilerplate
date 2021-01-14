import styled, { keyframes, css } from 'styled-components';
import ButtonBase from './ButtonBase';

const suffixIconAnimation = keyframes`
  0% {
    right: 2.5%;
  }
  50% {
    right: 4%;
  }
  100% {
    right: 2.5%;
  }
`;

const prefixIconAnimation = keyframes`
  0% {
    left: 2.5%;
  }
  50% {
    left: 4%;
  }
  100% {
    left: 2.5%;
  }
`;

export const ButtonStyled = styled(ButtonBase)`
  border-radius: 2rem;
  position: relative;
  padding: 20px 15px!important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width, theme }) => theme.width[width]};
  margin-left: auto;
  margin-right: auto;
  ${(props) => props.btnType && css`
  background-color: ${({ btnType, theme }) => theme.btnTypes[btnType][0]};
    color: ${({ btnType, theme }) => theme.btnTypes[btnType][1]};
  `}
  
  :hover {
    ${(props) => props.btnType && css`
    background-color: ${({ btnType, theme }) => theme.btnTypes[btnType][0]};
    color: ${({ btnType, theme }) => theme.btnTypes[btnType][1]};
    `}
  }

  ::after {
    content: "";
    ${(props) => props.suffixIcon && css`
      background: url(${({ suffixIcon, theme }) => theme.btnIcons[suffixIcon] || theme.btnIcons.default}) no-repeat center;
      right: 2.5%;
    `}
    ${(props) => props.prefixIcon && css`
      background: url(${({ prefixIcon, theme }) => theme.btnIcons[prefixIcon] || theme.btnIcons.default}) no-repeat center;
      left: 2.5%;
    `}
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute!important;
    top: 50%;
    opacity: 1!important;
    transform: translateY(-50%)!important;
    transition: all 1s ease-in .2s!important;
  }

  :hover::after {
    ${(props) => props.suffixIcon && css`
      animation: ${suffixIconAnimation} 1.2s 4!important;
    `}
    ${(props) => props.prefixIcon && css`
      animation: ${prefixIconAnimation} 1.2s 4!important;
    `}
  }
`;

ButtonStyled.defaultProps = {
  width: 10,
  btnType: 'default',
};
