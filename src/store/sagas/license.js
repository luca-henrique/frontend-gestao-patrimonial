import { call, put } from "redux-saga/effects";
import api from "~/service/api";

import { push } from "connected-react-router";

import LicenseActions from "../ducks/license";

import { actions as toastrActions } from "react-redux-toastr";

export function* updateToken({ token }) {
  try {
    const response = yield call(api.put, "license", { token });
    localStorage.setItem("@License:isLicensed", response.data.license);
    yield put(LicenseActions.licenseSuccess(response.data.license));
    yield put(push("/entrar"));
  } catch (err) {
    yield put(
      toastrActions.add({
        title: "Falha na chave da licença",
        message: "Está chave de acesso já está em uso/ou já foi usada.",
      })
    );
  }
}

export function* checkLicense() {
  try {
    const { data } = yield call(api.get, "license");

    if (data.length >= 1) {
      const license = data[data.length - 1].license;
      yield put(LicenseActions.licenceCheckRequest(license));
      if (license) {
        yield put(push("/entrar"));
      } else {
        yield put(push("/"));
      }
    } else {
      yield put(push("/"));
    }
  } catch (error) {
    yield put(
      toastrActions.add({
        title: "Falha na chave da licença",
        message: "Está chave de acesso já está em uso/ou já foi usada.",
      })
    );
  }
}
