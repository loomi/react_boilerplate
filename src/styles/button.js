import colors from 'styles/colors';
import nextIcon from 'assets/icons/next.svg';

// Button type is defined by
// { typeName: [backgroundColor, color] }
export const btnTypes = {
  default: [colors.primary, colors.white],
  danger: [colors.red, colors.white],
  salmon: [colors.salmon, colors.primaryDarker],
};

// Icons that can be used in buttons
export const btnIcons = {
  default: nextIcon,
};