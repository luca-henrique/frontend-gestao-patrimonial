import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/low-patrimony-item";
import { toastr } from "react-redux-toastr";

export function* readLowItemPatrimony({ payload }) {
  try {
    const { data } = yield call(api.get, `/low-patrimony/${payload.id}`);
    yield put(CreatorsLowItem.readLowPatrimonySuccess(data));
    if (data) {
      yield put(CreatorsLowItem.lowPatrimonyExist());
    } else {
      yield put(CreatorsLowItem.lowPatrimonyNotExist());
    }
  } catch (err) {}
}

export function* createLowItemPatrimony({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/low-patrimony", low);
    yield put(CreatorsLowItem.createLowPatrimonySuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteLowPatrimonyItem({ payload }) {
  try {
    yield call(api.delete, `/low-patrimony/${payload.id}`);
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateLowItem({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/low-patrimony/${low.id}`, low);
    yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
