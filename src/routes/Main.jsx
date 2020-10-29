import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from 'contexts/AuthProvider';
import PageLoading from 'components/PageLoading';

const LazyLogin = lazy(() => import('views/Login'));
const LazyProtected = lazy(() => import('./Protected'));
const LazyPasswordRecovery = lazy(() => import('views/PasswordRecovery'));
const LazyRedifinePassword = lazy(() => import('views/RedifinePassword'));

function Main() {
  const { authenticated } = useAuth();

  if (authenticated === null) {
    return <PageLoading />;
  }

  if (authenticated === false) {
    return (
      <Switch>
        <Route path="/login" component={LazyLogin} />
        <Route path="/password-recovery" component={LazyPasswordRecovery} />
        <Route path="/redefine-password" component={LazyRedifinePassword} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact render={() => <Redirect to="/" />} />
      <Route path="*" component={LazyProtected} />
    </Switch>
  );
}

export default Main;
