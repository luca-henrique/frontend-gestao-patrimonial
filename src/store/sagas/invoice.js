import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import ActionsInvoice from "../ducks/invoice";
import { toastr } from "react-redux-toastr";

export function* readInvoice({ patrimony_id }) {
  try {
    const { data } = yield call(api.get, `invoice/${patrimony_id}`);
    if (data) {
      yield put(ActionsInvoice.readInvoiceSuccess(true));
    } else {
      yield put(ActionsInvoice.readInvoiceSuccess(false));
    }
  } catch (err) {}
}

export function* uploadInvoice({ payload }) {
  try {
    const { data } = yield call(api.post, "/good-item", payload.data);
    //yield put(CreatorsGoodItem.createGoodItemSuccess(data));
    toastr.success("A nota fiscal foi adicionada.");
  } catch (err) {}
}

export function* deleteGoodItem({ payload }) {
  try {
    yield call(api.delete, `/good-item/${payload.id}`);
    //yield put(CreatorsGoodItem.deleteGoodItemSuccess(payload.id));
    toastr.error("A bem foi removida");
  } catch (err) {}
}

export function* updateGoodItem({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/good-item/${data.id}`, data);
    //yield put(CreatorsGoodItem.updateGoodItemSuccess(data));
  } catch (err) {}
}
