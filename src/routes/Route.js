import React from "react";
import PropTyes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { store } from "../store/index";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isLicensed,
  isAdmin,
  ...rest
}) {
  console.log(store.getState());

  const license = store.getState().license.isLisenced;

  const signed = store.getState().auth.signedIn;

  if (!license && isLicensed) {
    return <Redirect to="/" />;
  }

  if (!signed && license && !isLicensed) {
    return <Redirect to="/entrar" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTyes.bool,
  isLicensed: PropTyes.bool,
  component: PropTyes.oneOfType([PropTyes.element, PropTyes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isLicensed: false,
};
