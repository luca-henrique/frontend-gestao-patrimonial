import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsAccount } from "../ducks/account";

import { push } from "connected-react-router";

export function* readUserJoined() {
  try {
    const { data } = yield call(api.get, "/user_joined");
    yield put(CreatorsAccount.readAccountJoinedSuccess(data));

    if (data.role) {
      yield put(push("/admin"));
    } else {
      yield put(push("/user"));
    }
  } catch (err) {}
}

export function* readAccounts() {
  try {
    const { data } = yield call(api.get, "/user/");
    yield put(CreatorsAccount.readAccountSuccess(data));
  } catch (err) {}
}

export function* createAccount({ payload }) {
  try {
    const { account } = payload;

    console.log(account);

    const response = yield call(api.post, "/user", account);
  } catch (err) {}
}

export function* deleteAccount({ payload }) {
  try {
    yield call(api.delete, `/user/${payload.id}`);
  } catch (err) {}
}
