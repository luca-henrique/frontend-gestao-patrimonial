import {applyMiddleware, createStore, compose} from 'redux';
import '../config/ReactotronConfig';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'connected-react-router';

import logger from 'redux-logger';

import rootReducer from './ducks';
import rootSaga from './sagas';
import history from '../routes/history';
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [logger, sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(...middlewares)),
);

const persistor = store;

sagaMiddleware.run(rootSaga);

export {store};
