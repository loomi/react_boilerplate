import React from 'react';
import PageHeader from './PageHeader';
import Styled from './PageTabs.style';

function PageTabs({ title, children, ...props }) {
  return (
    <Styled.Tabs
      {...props}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <Styled.PageTabs>
          <PageHeader title={title} />
          <DefaultTabBar {...tabBarProps} />
        </Styled.PageTabs>
      )}
    >
      {children}
    </Styled.Tabs>
  );
}

export default PageTabs;
