import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/locale-item";
import { toastr } from "react-redux-toastr";

export function* readLocaleItem() {
  try {
    const { data } = yield call(api.get, "/locale-item");
    //yield put(CreatorsLowItem.readLowItemSuccess(data));
  } catch (err) {}
}

export function* createLocaleItem({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/locale-item", low);
    //yield put(CreatorsLowItem.createLowItemSuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteLocaleItem({ payload }) {
  try {
    yield call(api.delete, `/locale-item/${payload.id}`);
    // yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateLocaleItem({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/locale-item/${low.id}`, low);
    //yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
