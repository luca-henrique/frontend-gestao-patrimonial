import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPrefecture } from "../ducks/prefecture";
import { Creators as CreatorsPrefectureAddress } from "../ducks/prefecture_address";
import { Creators as CreatorsPrefectureContact } from "../ducks/prefecture_contact";

import { toastr } from "react-redux-toastr";

export function* readPrefecture() {
  try {
    const { data } = yield call(api.get, "/prefecture");

    if (data.length > 0) {
      yield put(CreatorsPrefecture.readPrefecturePrefectureSuccess(data[0]));
      yield put(CreatorsPrefectureAddress.readPrefectureAddressRequest());
      yield put(CreatorsPrefectureContact.readPrefectureContactRequest());
    } else {
      yield put(CreatorsPrefecture.showPrefectureCreate());
    }
  } catch (err) {}
}

export function* createPrefecture({ payload }) {
  try {
    const { prefeture } = payload;
    yield call(api.post, "/prefecture", prefeture);
  } catch (err) {}
}

export function* updatePrefecture({ payload }) {
  try {
    const { prefecture } = payload;
    yield call(api.put, `/prefecture/${prefecture.id}`, prefecture);
    toastr.success("Informações da prefeitura atualizadas.");
  } catch (err) {}
}
