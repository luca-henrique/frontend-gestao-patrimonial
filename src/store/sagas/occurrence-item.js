import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsOccurrenceItem } from "../ducks/occurrence-item";
import { toastr } from "react-redux-toastr";

export function* readOccurrenceItem() {
  try {
    const { data } = yield call(api.get, "/occurrence-item");
    yield put(CreatorsOccurrenceItem.readOccurrenceItemSuccess(data));
  } catch (err) {}
}

export function* createOccurrenceItem({ payload }) {
  try {
    const { data } = yield call(api.post, "/occurrence-item", payload.data);
    yield put(CreatorsOccurrenceItem.createOccurrenceItemSuccess(data));
    toastr.success("O item foi criado.");
  } catch (err) {}
}

export function* deleteOccurrenceItem({ payload }) {
  try {
    yield call(api.delete, `/occurrence-item/${payload.id}`);
    yield put(CreatorsOccurrenceItem.deleteOccurrenceItemSuccess(payload.id));
    toastr.error("O item foi removido");
  } catch (err) {}
}

export function* updateOccurenceItem({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/occurrence-item/${data.id}`, data);
    yield put(CreatorsOccurrenceItem.updateOccurrenceItemSuccess(data));
    toastr.success("O item foi atualizado.");
  } catch (err) {}
}
