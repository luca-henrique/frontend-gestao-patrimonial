import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/low-item";
import { toastr } from "react-redux-toastr";

export function* readLowItem() {
  try {
    const { data } = yield call(api.get, "/low-item");
    yield put(CreatorsLowItem.readLowItemSuccess(data));
  } catch (err) {}
}

export function* createLowItem({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/low-item", low);
    yield put(CreatorsLowItem.createLowItemSuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteLowItem({ payload }) {
  try {
    yield call(api.delete, `/low-item/${payload.id}`);
    yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateLowItem({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/low-item/${low.id}`, low);
    yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
