import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/nature-item";
import { toastr } from "react-redux-toastr";

export function* readNatureItem() {
  try {
    const { data } = yield call(api.get, "/nature-item");
    //yield put(CreatorsLowItem.readLowItemSuccess(data));
  } catch (err) {}
}

export function* createNatureItem({ payload }) {
  try {
    const { low } = payload;
    const { data } = yield call(api.post, "/nature-item", low);
    //yield put(CreatorsLowItem.createLowItemSuccess(data));
    toastr.success("A baixa foi criada.");
  } catch (err) {}
}

export function* deleteNatureItem({ payload }) {
  try {
    yield call(api.delete, `/nature-item/${payload.id}`);
    // yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateNatureItem({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/nature-item/${low.id}`, low);
    //yield put(CreatorsLowItem.updateLowItemSuccess(low));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
