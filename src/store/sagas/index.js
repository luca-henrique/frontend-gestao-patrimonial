// eslint-disable-next-line no-unused-vars
import { all, takeLatest } from "redux-saga/effects";

import { Types as TypesAccount } from "../ducks/account";
import { index } from "./account";

export default function* rootSaga() {
  return yield all([takeLatest(TypesAccount.CREATE_ACCOUNT_REQUEST, index)]);
}
