import React from 'react';
import { Layout, Tabs } from 'antd';
import { StyledPage } from './Page.style';
import PageHeader from './PageHeader';
import PageSubtitle from './PageSubtitle';
import PageTabs from './PageTabs';

function Page(props) {
  return (
    <Layout>
      <StyledPage {...props} />
    </Layout>
  );
}

Page.Header = PageHeader;
Page.Subtitle = PageSubtitle;
Page.Tabs = PageTabs;
Page.Tab = Tabs.TabPane;

export default Page;
