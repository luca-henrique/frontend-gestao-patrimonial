import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPrefectureContact } from "../ducks/prefecture_contact";

import { toastr } from "react-redux-toastr";

export function* readPrefectureContact({ payload }) {
  try {
    const { data } = yield call(api.get, `/prefecture-contact/${payload.id}`);

    yield put(CreatorsPrefectureContact.readPrefectureContactSuccess(data));
  } catch (err) {}
}

export function* createPrefectureContact({ payload }) {
  try {
    const { data } = yield call(api.post, "/prefecture-contact", payload.data);
    yield put(CreatorsPrefectureContact.readPrefectureContactSuccess(data));
  } catch (err) {}
}

export function* updatePrefectureContact({ payload }) {
  try {
    yield call(api.put, `/prefecture-contact/${payload.data.id}`, payload.data);
    toastr.success("Contato atualizado");
  } catch (err) {}
}
