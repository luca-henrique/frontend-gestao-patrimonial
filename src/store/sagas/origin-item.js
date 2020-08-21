import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsOriginItem } from "../ducks/origin-item";
import { toastr } from "react-redux-toastr";

export function* readOriginItem() {
  try {
    const { data } = yield call(api.get, "/origin-item");
    yield put(CreatorsOriginItem.readOriginItemSuccess(data));
  } catch (err) {}
}

export function* createOriginItem({ payload }) {
  try {
    const { data } = yield call(api.post, "/origin-item", payload.data);
    yield put(CreatorsOriginItem.createOriginItemSuccess(data));
    toastr.success("O item foi criado.");
  } catch (err) {}
}

export function* deleteOriginItem({ payload }) {
  try {
    yield call(api.delete, `/origin-item/${payload.id}`);
    yield put(CreatorsOriginItem.deleteOriginItemSuccess(payload.id));
    toastr.error("O item foi removido");
  } catch (err) {}
}

export function* updateOriginItem({ payload }) {
  try {
    yield call(api.put, `/origin-item/${payload.data.id}`, payload.data);
    yield put(CreatorsOriginItem.updateOriginItemSuccess(payload.data));
    toastr.success("O item foi atualizdo.");
  } catch (err) {}
}
