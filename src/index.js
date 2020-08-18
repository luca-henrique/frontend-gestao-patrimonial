import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import { PersistGate } from "redux-persist/integration/react";

import Portal from "./portal";

import { store, persistor } from "./store";

import GlobalStyle from "./styles/global";
import "./config/ReactotronConfig";
import Routes from "./routes/index";

const Providers = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <Providers store={store}>
    <Fragment>
      <Routes />
      <GlobalStyle />
      <ReduxToastr />
    </Fragment>
  </Providers>,
  document.getElementById("root")
);

ReactDOM.render(
  <Providers>
    <Portal />
  </Providers>,
  document.getElementById("main-portal")
);
