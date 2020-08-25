import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsUnit } from "../ducks/units";
import { toastr } from "react-redux-toastr";

export function* readUnit({ payload }) {
  try {
    console.log(payload);
    const { data } = yield call(api.get, `/units/${payload.id}`);
    yield put(CreatorsUnit.readUnitSuccess(data));
  } catch (err) {}
}

export function* createUnit({ payload }) {
  try {
    console.log(payload.data);
    const { data } = yield call(api.post, "/unit", payload.data);
    yield put(CreatorsUnit.createUnitSuccess(data));
    toastr.success("A únidade foi criada.");
  } catch (err) {}
}

export function* deleteUnit({ payload }) {
  try {
    yield call(api.delete, `/unit/${payload.id}`);
    yield put(CreatorsUnit.deleteUnitSuccess(payload.id));
    toastr.error("A únidade foi removida");
  } catch (err) {}
}

export function* updateUnit({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/unit/${data.id}`, data);
    yield put(CreatorsUnit.updateUnitSuccess(data));
    toastr.success("A únidade foi atualizada.");
  } catch (err) {}
}
