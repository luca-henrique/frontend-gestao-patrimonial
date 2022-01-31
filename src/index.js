import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Portal from './portal';

import {store} from './store';

import GlobalStyle from './styles/global';
import './config/ReactotronConfig';
import Routes from './routes/index';

const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

ReactDOM.render(
  <Providers store={store}>
    <Fragment>
      <Routes />
      <GlobalStyle />
      <ReduxToastr />
    </Fragment>
  </Providers>,
  document.getElementById('root'),
);
