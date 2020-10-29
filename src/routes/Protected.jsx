import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import NProgress from 'components/NProgress';

const LazyDashboard = lazy(() => import('views/Dashboard'));
const LazyUsers = lazy(() => import('views/Users'));

function Protected() {
  return (
    <>
      <Sidebar />

      <Suspense fallback={<NProgress />}>
        <Switch>
          <Route path="/" exact component={LazyDashboard} />
          <Route path="/users" component={LazyUsers} />
        </Switch>
      </Suspense>

    </>
  );
}

export default Protected;
