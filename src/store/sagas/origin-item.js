import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/origin-item";
import { toastr } from "react-redux-toastr";

export function* readOriginItem() {
  try {
    const { data } = yield call(api.get, "/origin-item");
    //yield put(CreatorsLowItem.readLowItemSuccess(data));
  } catch (err) {}
}

export function* createOriginItem({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/origin-item", low);
    //yield put(CreatorsLowItem.createLowItemSuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteOriginItem({ payload }) {
  try {
    yield call(api.delete, `/origin-item/${payload.id}`);
    // yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateOriginItem({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/origin-item/${low.id}`, low);
    //yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
