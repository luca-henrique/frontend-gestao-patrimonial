import React from "react";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "./history";

import Route from "./Route";

import License from "../pages/License";
import SignIn from "../pages/SignIn";

import AdminPage from "../pages/Admin/";
import UserPage from "../pages/User/";

export default function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={License} />
        <Route path="/entrar" component={SignIn} isLicensed />

        <Route path="/admin" component={AdminPage} isLicensed isPrivate />
        <Route path="/user" component={UserPage} isLicensed isPrivate />
      </Switch>
    </ConnectedRouter>
  );
}
