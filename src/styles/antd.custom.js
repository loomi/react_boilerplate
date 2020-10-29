/**
 * Ant Design custom theme
 * ref: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 */

const base = require('./base');
const colors = require('./colors');
const fonts = require('./fonts');

/**
 * Custom Antd Theme
 */
module.exports = ({
  '@primary-color': colors.primary,
  '@primary-light-color': colors.primaryLight,
  '@secondary-color': colors.secondary,
  '@salmon-color': colors.salmon,
  '@body-background': colors.bodyBackground,
  '@success-color': colors.success,
  '@warning-color': colors.warning,
  '@error-color': colors.error,
  '@heading-color': colors.text,
  '@text-color': colors.text,
  '@text-color-secondary': colors.textSecondary,
  '@box-shadow-base': base.boxShadow,
  '@font-family': fonts.nunito,
  '@border-radius-base': base.borderRadius,
});
