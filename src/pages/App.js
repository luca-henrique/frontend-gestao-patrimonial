import React from "react";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import { store } from "../store/";

import Routes from "../routes/";
import history from "../service/history";

import "../config/ReactotronConfig";

import GlobalStyle from "../styles/global";

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <Routes />
      <ReduxToastr />
    </Router>
  </Provider>
);

export default App;
