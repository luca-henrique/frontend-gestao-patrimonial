import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/sectors";
import { toastr } from "react-redux-toastr";

export function* readSector() {
  try {
    const { data } = yield call(api.get, "/sector");
    //yield put(CreatorsLowItem.readLowItemSuccess(data));
  } catch (err) {}
}

export function* createSector({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/sector", low);
    //yield put(CreatorsLowItem.createLowItemSuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteSector({ payload }) {
  try {
    yield call(api.delete, `/sector/${payload.id}`);
    // yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateSector({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/sector/${low.id}`, low);
    //yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
