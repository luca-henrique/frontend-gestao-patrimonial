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

/* --> items <-- */

import low from "./low-item";
import good from "./good-item";
import locale from "./locale-item";
import sectors from "./sectors";
import units from "./units";
import origin from "./origin-item";
import occurrence from "./occurrence-item";
import state from "./state-item";
import nature from "./nature-item";

import patrimony_item from "./patrimony";
import delete_patrimony_item from "./delete-patrimony-item";

export default (history) =>
  combineReducers({
    toastr,
    page,
    account,

    low,
    good,

    locale,
    sectors,
    units,

    origin,
    occurrence,
    state,
    nature,

    patrimony_item,
    delete_patrimony_item,

    router: connectRouter(history),
  });
