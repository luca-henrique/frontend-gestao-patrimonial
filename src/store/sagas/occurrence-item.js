import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/occurrence-item";
import { toastr } from "react-redux-toastr";

export function* readOccurrenceItem() {
  try {
    const { data } = yield call(api.get, "/occurrence-item");
    yield put(CreatorsLowItem.readLowItemSuccess(data));
  } catch (err) {}
}

export function* createOccurrenceItem({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/occurrence-item", low);
    //yield put(CreatorsLowItem.createLowItemSuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteOccurrenceItem({ payload }) {
  try {
    yield call(api.delete, `/occurrence-item/${payload.id}`);
    // yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateOccurenceItem({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/occurrence-item/${low.id}`, low);
    //yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
