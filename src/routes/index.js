import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Loader from "~/components/Loader";

import history from "./history";

import Route from "./Route";

const License = lazy(() => import("../pages/License"));
const SignIn = lazy(() => import("../pages/SignIn"));
const AdminPage = lazy(() => import("../pages/Admin/"));

export default function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={(props) => <License {...props} />} />
          <Route
            path="/entrar"
            component={(props) => <SignIn {...props} />}
            isLicensed
          />

          <Route
            path="/admin"
            component={(props) => <AdminPage {...props} />}
            isLicensed
            isPrivate
          />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
}
