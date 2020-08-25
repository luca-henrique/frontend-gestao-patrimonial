import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsGoodItem } from "../ducks/good-item";
import { toastr } from "react-redux-toastr";

export function* readGoodItem() {
  try {
    const { data } = yield call(api.get, "/good-item");
    yield put(CreatorsGoodItem.readGoodItemSuccess(data));
  } catch (err) {}
}

export function* createGoodItem({ payload }) {
  try {
    const { data } = yield call(api.post, "/good-item", payload.data);
    yield put(CreatorsGoodItem.createGoodItemSuccess(data));
    toastr.success("O bem foi criado.");
  } catch (err) {}
}

export function* deleteGoodItem({ payload }) {
  try {
    yield call(api.delete, `/good-item/${payload.id}`);
    yield put(CreatorsGoodItem.deleteGoodItemSuccess(payload.id));
    toastr.error("A bem foi removida");
  } catch (err) {}
}

export function* updateGoodItem({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/good-item/${data.id}`, data);
    yield put(CreatorsGoodItem.updateGoodItemSuccess(data));
  } catch (err) {}
}
