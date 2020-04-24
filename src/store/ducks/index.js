import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";

/**
 * controler de mudança de rotas
 */

import page from "./page";

export default (history) =>
  combineReducers({
    toastr,
    page,

    router: connectRouter(history),
  });
