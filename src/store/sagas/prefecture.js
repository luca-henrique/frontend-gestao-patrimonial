import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPrefecture } from "../ducks/prefecture";

import { toastr } from "react-redux-toastr";
export function* readPrefecture() {
  try {
    const { data } = yield call(api.get, "/prefecture");

    if (data.id) {
      yield put(CreatorsPrefecture.readPrefecturePrefectureSuccess(data));
    } else {
      yield put(CreatorsPrefecture.readPrefecturePrefectureFail());
    }
  } catch (err) {}
}

export function* createPrefecture({ payload }) {
  try {
    const { prefecture } = payload;
    const { data } = yield call(api.post, "/prefecture", prefecture);

    yield put(CreatorsPrefecture.createPrefectureSuccess(data));
  } catch (err) {}
}

export function* updatePrefecture({ payload }) {
  try {
    const { prefecture } = payload;
    yield call(api.put, `/prefecture/${prefecture.id}`, prefecture);
    toastr.success("Informações da prefeitura atualizadas.");
  } catch (err) {}
}
