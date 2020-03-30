import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import License from "../pages/License";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={License} />
      <Route path="/entrar" component={SignIn} isLicensed />
      <Route path="/dashboard" component={Dashboard} isPrivate isLicensed />
    </Switch>
  );
}
