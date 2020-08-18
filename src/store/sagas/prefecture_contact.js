import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPrefectureContact } from "../ducks/prefecture_contact";

import { toastr } from "react-redux-toastr";

export function* readPrefectureContact() {
  try {
    const { data } = yield call(api.get, `/get-prefecture-contact`);

    yield put(CreatorsPrefectureContact.readPrefectureContactSuccess(data));
  } catch (err) {}
}

export function* createPrefectureContact({ payload }) {
  try {
    const { contact } = payload;
    const { data } = yield call(api.post, "/prefecture-contact", contact);
    yield put(CreatorsPrefectureContact.readPrefectureContactSuccess(data));
  } catch (err) {}
}

export function* updatePrefectureContact({ payload }) {
  try {
    const { contact } = payload;

    yield call(api.put, `/prefecture-contact/${contact.id || 1}`, contact);
    toastr.success("Contato atualizado");
  } catch (err) {}
}
