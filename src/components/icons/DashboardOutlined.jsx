import React from 'react';
import Icon from 'components/icons/Icon';

import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg';

const DashboardOutlined = (props) => (
  <Icon {...props} component={DashboardIcon} />
);

export default DashboardOutlined;
