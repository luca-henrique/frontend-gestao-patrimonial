import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/state-item";
import { toastr } from "react-redux-toastr";

export function* readStateItem() {
  try {
    const { data } = yield call(api.get, "/state-item");
    // yield put(CreatorsLowItem.readLowItemSuccess(data));
  } catch (err) {}
}

export function* createStateItem({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/state-item", low);
    // yield put(CreatorsLowItem.createLowItemSuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteStateItem({ payload }) {
  try {
    yield call(api.delete, `/state-item/${payload.id}`);
    //yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateStateItem({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/state-item/${low.id}`, low);
    //yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("O estado foi atualizado.");
  } catch (err) {}
}
