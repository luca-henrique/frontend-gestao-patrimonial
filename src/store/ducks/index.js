import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";

/**
 * controler de mudança de rotas
 */

import page from "./page";
/**
 * Contas
 */
import account from "./account";

export default (history) =>
  combineReducers({
    toastr,
    page,
    account,

    router: connectRouter(history),
  });
