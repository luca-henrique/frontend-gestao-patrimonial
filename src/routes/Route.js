import React from "react";
import PropTyes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isLicensed,
  ...rest
}) {
  const signed = false;

  const licensed = true;

  if (!licensed && isLicensed) {
    return <Redirect to="/" />;
  }

  if (!signed && licensed && !isLicensed) {
    return <Redirect to="/entrar" />;
  }

  if (signed && licensed && !isLicensed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTyes.bool,
  isLicensed: PropTyes.bool,
  component: PropTyes.oneOfType([PropTyes.element, PropTyes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isLicensed: false
};
