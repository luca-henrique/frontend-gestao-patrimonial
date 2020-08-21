import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsStateItem } from "../ducks/state-item";
import { toastr } from "react-redux-toastr";

export function* readStateItem() {
  try {
    const { data } = yield call(api.get, "/state-item");
    yield put(CreatorsStateItem.readStateItemSuccess(data));
  } catch (err) {}
}

export function* createStateItem({ payload }) {
  try {
    const { data } = yield call(api.post, "/state-item", payload.data);
    yield put(CreatorsStateItem.createStateItemSuccess(data));
    toastr.success("O estado foi criado.");
  } catch (err) {}
}

export function* deleteStateItem({ payload }) {
  try {
    yield call(api.delete, `/state-item/${payload.id}`);
    yield put(CreatorsStateItem.deleteStateItemSuccess(payload.id));
    toastr.error("O estado foi removido");
  } catch (err) {}
}

export function* updateStateItem({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/state-item/${data.id}`, data);
    yield put(CreatorsStateItem.updateStateItemSuccess(data));
    toastr.success("O estado foi atualizado.");
  } catch (err) {}
}
