import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import ContainerLoading from 'components/atomic/atoms/Loader';

const SignIn = lazy(() => import('../pages/SignIn'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Routes = () => {
  return (
    <Suspense fallback={<ContainerLoading />}>
      <Switch>
        <Route exact path='/' component={(props) => <SignIn {...props} />} />
        <Route
          exact
          path='/Dashboard'
          component={(props) => <Dashboard {...props} />}
        />

        <Route path='/404' component={(props) => <div {...props} />} />
        <Redirect to='/404' />
      </Switch>
    </Suspense>
  );
};

export default Routes;
