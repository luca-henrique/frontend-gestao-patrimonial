import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/units";
import { toastr } from "react-redux-toastr";

export function* readUnit() {
  try {
    const { data } = yield call(api.get, "/units");
    //yield put(CreatorsLowItem.readLowItemSuccess(data));
  } catch (err) {}
}

export function* createUnit({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/units", low);
    //yield put(CreatorsLowItem.createLowItemSuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteUnit({ payload }) {
  try {
    yield call(api.delete, `/units/${payload.id}`);
    // yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateUnit({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/units/${low.id}`, low);
    //yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
