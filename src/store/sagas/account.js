import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsAccount } from "../ducks/account";

import { push } from "connected-react-router";

export function* readUserJoined() {
  try {
    const { data } = yield call(api.get, "/user-joined");
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

    const { data } = yield call(api.post, "/user", account);
    yield put(CreatorsAccount.createAccountSuccess(data));
  } catch (err) {}
}

export function* deleteAccount({ payload }) {
  try {
    yield call(api.delete, `/user/${payload.id}`);
    yield put(CreatorsAccount.deleteAccountSuccess(payload.id));
  } catch (err) {}
}

export function* updateAccount({ payload }) {
  try {
    const { account } = payload;
    const { data } = yield call(api.put, `/user/${account.id}`, account);
    yield put(CreatorsAccount.updateAccountSuccess(data));
  } catch (err) {}
}

export function* changerPasswordAccount({ payload }) {
  try {
    const { password } = payload;

    yield call(api.put, "/change-password-user", password);
  } catch (err) {}
}
