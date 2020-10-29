import React from 'react';
import Icon from 'components/icons/Icon';

import { ReactComponent as UsersIcon } from 'assets/icons/users.svg';

const UsersOutlined = (props) => (
  <Icon {...props} component={UsersIcon} />
);

export default UsersOutlined;
