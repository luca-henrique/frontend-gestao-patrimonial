import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Loader from "~/components/Loader";

import history from "./history";

import Route from "./Route";

import License from "../pages/License";
import SignIn from "../pages/SignIn";

const AdminPage = lazy(() => import("../pages/Admin/"));

export default function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={License} />
          <Route path="/entrar" component={SignIn} isLicensed />

          <Route path="/admin" component={AdminPage} isLicensed isPrivate />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
}
