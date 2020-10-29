import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';

import { withGlobalProvider } from 'contexts/GlobalProvider';
import PageLoading from 'components/PageLoading';
import Main from 'routes/Main';

const App = () => (
  <Layout>
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Main />
      </Suspense>
    </BrowserRouter>
  </Layout>
);

export default withGlobalProvider(App);
