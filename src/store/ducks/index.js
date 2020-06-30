import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";

/**Licença */

import { reducer as license } from "./license";

/* login */

import { reducer as auth } from "./auth";

/**
 * controler de mudança de rotas
 */

import page from "./page";
import drawer from "./drawer-menu";
/**
 * Contas
 */
import account from "./account";

import prefecture from "./prefecture";
import prefecture_address from "./prefecture_address";
import prefecture_contact from "./prefecture_contact";

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
import duplicate_patrimony_item from "./duplicate-patrimony-item";
import low_patrimony_item from "./low-patrimony-item";
import transfer_patrimony_item from "./transference-patrimony-item";
import occurrente_patrimony_item from "./occurrence-patrimony-item";

export default (history) =>
  combineReducers({
    toastr,

    license,

    auth,

    page,
    drawer,

    account,

    prefecture,
    prefecture_address,
    prefecture_contact,

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
    duplicate_patrimony_item,
    low_patrimony_item,
    transfer_patrimony_item,
    occurrente_patrimony_item,

    router: connectRouter(history),
  });
