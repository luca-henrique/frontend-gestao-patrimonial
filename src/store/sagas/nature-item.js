import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsNatureItem } from "../ducks/nature-item";
import { toastr } from "react-redux-toastr";

export function* readNatureItem() {
  try {
    const { data } = yield call(api.get, "/nature-item");
    yield put(CreatorsNatureItem.readNatureItemSuccess(data));
  } catch (err) {}
}

export function* createNatureItem({ payload }) {
  try {
    const { data } = yield call(api.post, "/nature-item", payload.data);
    yield put(CreatorsNatureItem.createNatureItemSuccess(data));
    toastr.success("O item foi criado");
  } catch (err) {}
}

export function* deleteNatureItem({ payload }) {
  try {
    yield call(api.delete, `/nature-item/${payload.id}`);
    yield put(CreatorsNatureItem.deleteNatureItemSuccess(payload.id));
    toastr.error("O item foi removido");
  } catch (err) {}
}

export function* updateNatureItem({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/nature-item/${data.id}`, data);
    yield put(CreatorsNatureItem.updateNatureItemSuccess(data));
    toastr.success("O item foi atualizado");
  } catch (err) {}
}
