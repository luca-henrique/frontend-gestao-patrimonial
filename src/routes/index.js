import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import Loader from '~/components/atomic/atoms/Loader';

import history from './history';

const SignIn = lazy(() => import('../pages/SignIn'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
export default function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={Dashboard} />

          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
}
