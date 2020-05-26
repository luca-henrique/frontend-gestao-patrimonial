// eslint-disable-next-line no-unused-vars
import { all, takeLatest } from "redux-saga/effects";

import { Types as TypesAccount } from "../ducks/account";
import { createAccount } from "./account";

import { Types as TypesUnits } from "../ducks/units";
import { createUnit, updateUnit } from "./units";

export default function* rootSaga() {
  return yield all([
    takeLatest(TypesAccount.CREATE_ACCOUNT_REQUEST, createAccount),

    takeLatest(TypesUnits.CREATE_UNITS_REQUEST, createUnit),
    takeLatest(TypesUnits.UPDATE_UNITS_REQUEST, updateUnit),
  ]);
}
