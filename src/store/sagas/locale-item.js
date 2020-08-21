import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLocaleItem } from "../ducks/locale-item";
import { toastr } from "react-redux-toastr";

export function* readLocaleItem() {
  try {
    const { data } = yield call(api.get, "/locale-item");
    yield put(CreatorsLocaleItem.readLocaleItemSuccess(data));
  } catch (err) {}
}

export function* createLocaleItem({ payload }) {
  try {
    const { data } = yield call(api.post, "/locale-item", payload.data);
    yield put(CreatorsLocaleItem.createLocaleItemSuccess(data));
    toastr.success("O local foi criado");
  } catch (err) {}
}

export function* deleteLocaleItem({ payload }) {
  try {
    yield call(api.delete, `/locale-item/${payload.id}`);
    yield put(CreatorsLocaleItem.deleteLocaleItemSuccess(payload.id));
    toastr.error("O local foi removido");
  } catch (err) {}
}

export function* updateLocaleItem({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/locale-item/${data.id}`, data);
    yield put(CreatorsLocaleItem.updateLocaleItemSuccess(data));
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
