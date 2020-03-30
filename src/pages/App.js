import React from "react";
import { Router } from "react-router-dom";

import Routes from "../routes/";
import history from "../service/history";

import "../config/ReactotronConfig";

import GlobalStyle from "../styles/global";

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
