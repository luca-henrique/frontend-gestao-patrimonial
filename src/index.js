import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import store from './store';

import GlobalStyle from './styles/global';
import './config/ReactotronConfig';

import {Router} from 'react-router-dom';
import history from '~/router/history';
import Routes from '~/router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ReduxToastr />
      <GlobalStyle />
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
