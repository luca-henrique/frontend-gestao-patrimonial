import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsAccount } from "../ducks/account";

import { store } from "~/store/index";

import { push } from "connected-react-router";

import { toastr } from "react-redux-toastr";

export function* readUserJoined() {
  try {
    const { data } = yield call(api.get, "/user-joined");
    yield put(CreatorsAccount.readAccountJoinedSuccess(data));

    yield put(push("/admin"));
  } catch (err) {}
}

export function* readAccounts() {
  try {
    const { data } = yield call(api.get, "/user/");
    yield put(CreatorsAccount.readAccountSuccess(data));
  } catch (err) {
    var data = err.response.data;
    if (data.length >= 1) {
      data.map((error) => {
        return toastr.error(error.message);
      });
    } else {
      toastr.error(err.response.data.error.message);
    }
  }
}

export function* createAccount({ payload }) {
  try {
    const { account } = payload;

    const { data } = yield call(api.post, "/user", account);
    yield put(CreatorsAccount.createAccountSuccess(data));

    toastr.success("Úsuario criado.");
  } catch (err) {
    var data = err.response.data;
    if (data.length >= 1) {
      data.map((error) => {
        return toastr.error(error.message);
      });
    } else {
      toastr.error(err.response.data.error.message);
    }
  }
}

export function* deleteAccount({ payload }) {
  try {
    yield call(api.delete, `/user/${payload.id}`);
    yield put(CreatorsAccount.deleteAccountSuccess(payload.id));
  } catch (err) {
    var data = err.response.data;
    if (data.length >= 1) {
      data.map((error) => {
        return toastr.error(error.message);
      });
    } else {
      toastr.error(err.response.data.error.message);
    }
  }
}

export function* updateAccount({ payload }) {
  try {
    const { account } = payload;
    const { data } = yield call(api.put, `/user/${account.id}`, account);
    yield put(CreatorsAccount.updateAccountSuccess(data));
    if (store.getState().account.account_joined.id === account.id) {
      toastr.success("Suas informações foram atualizadas.");
    } else {
      toastr.success("As informações do úsuario foram atualizadas.");
    }
  } catch (err) {
    var data = err.response.data;
    if (data.length >= 1) {
      data.map((error) => {
        return toastr.error(error.message);
      });
    } else {
      toastr.error(err.response.data.error.message);
    }
  }
}

export function* changerPasswordAccount({ payload }) {
  try {
    const { password } = payload;

    yield call(api.put, "/change-password-user", password);
  } catch (err) {
    var data = err.response.data;
    if (data.length >= 1) {
      data.map((error) => {
        return toastr.error(error.message);
      });
    } else {
      toastr.error(err.response.data.error.message);
    }
  }
}
