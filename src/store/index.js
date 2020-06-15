import { applyMiddleware, createStore, compose } from "redux";
import "../config/ReactotronConfig";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import rootReducer from "./ducks";
import rootSaga from "./sagas";
import history from "../routes/history";
const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export { store };
