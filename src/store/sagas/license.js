import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { push } from "connected-react-router";

import LicensedActions from "../ducks/license";

import { actions as toastrActions } from "react-redux-toastr";

export function* signIn({ token }) {
  try {
    const response = yield call(api.post, "license", { token });
    console.log(response);

    //localStorage.setItem("@Omni:token", response.data.token);
  } catch (err) {
    yield put(
      toastrActions.add({
        title: "Falha no login",
        message:
          "Email/senha errados, entre em contato com a empresa responsavel ou com o administrador.",
      })
    );
  }
}

export function* signOut() {
  /**
   * Remover tudo quando sair
   */

  localStorage.removeItem("@Omni:token");
  localStorage.removeItem("@Omni:team");

  yield put(push("/"));
}
