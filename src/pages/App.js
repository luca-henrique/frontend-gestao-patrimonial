import React from 'react';
import {Router} from 'react-router-dom';

import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import {PersistGate} from 'redux-persist/integration/react';

import {ToastContainer} from 'react-toastify';

import {store, persistor} from '../store/';

import Routes from '../router';
import history from '../service/history';

import '../config/ReactotronConfig';

import GlobalStyle from '../styles/global';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
        <ReduxToastr />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
