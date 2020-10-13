import { call, put } from "redux-saga/effects";
import api from "~/service/api";

import { push } from "connected-react-router";
import AuthActions from "../ducks/auth";
import { Creators as AccountCreators } from "../ducks/account";
import { Creators as NavigationPageCreators } from "../ducks/page";

import { toastr } from "react-redux-toastr";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "auth", { email, password });
    if (response.status === 204) {
      throw new Error("Não veio jwt");
    }

    localStorage.setItem("@Omni:token", response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(AccountCreators.readAccountJoinedRequest());
  } catch (err) {
    var data = err.response.data;
    if (data.length >= 1) {
      data.map((error) => {
        toastr.error(error.message);
      });
    } else {
      toastr.error(err.response.data.error.message);
    }
  }
}

export function* signOut() {
  yield put(NavigationPageCreators.changePageLocation("default"));
  yield put(AccountCreators.readAccountSuccess([]));
  localStorage.removeItem("@Omni:token");
  localStorage.removeItem("@Omni:team");

  yield put(push("/entrar"));
}
