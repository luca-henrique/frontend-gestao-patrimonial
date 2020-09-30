import { call, put } from "redux-saga/effects";
import api from "~/service/api";

import { push } from "connected-react-router";

import LicenseActions from "../ducks/license";

import { actions as toastrActions } from "react-redux-toastr";
import { toastr } from "react-redux-toastr";

export function* updateToken({ token }) {
  try {
    const response = yield call(api.put, "license", { token });
    localStorage.setItem("@License:isLicensed", response.data.license);
    yield put(LicenseActions.licenseSuccess(response.data.license));
    yield put(push("/entrar"));
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
