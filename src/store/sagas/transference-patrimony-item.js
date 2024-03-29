import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsTransferencePatrimony } from "../ducks/transference-patrimony-item";
import { toastr } from "react-redux-toastr";

export function* readTransferencersPatrimony({ payload }) {
  try {
    const { data } = yield call(api.get, `/patrimony-transfers/${payload.id}`);
    yield put(CreatorsTransferencePatrimony.readTransfersSuccess(data));
  } catch (err) {}
}

export function* createTransferencePatrimony({ payload }) {
  try {
    yield call(api.post, "/transfers", payload.data);
    yield put(
      CreatorsTransferencePatrimony.readTransfersRequest(
        payload.data.id_patrimony
      )
    );
    toastr.success("O item foi transferido.");
  } catch (err) {}
}

export function* deleteTransferencePatrimony({ payload }) {
  try {
    yield call(api.delete, `/transfers/${payload.id}`);
    yield put(
      CreatorsTransferencePatrimony.deleteTransferencePatrimonySuccess(
        payload.id
      )
    );
    toastr.error("A baixa foi removida");
  } catch (err) {}
}

export function* updateTransferencePatrimony({ payload }) {
  try {
    const { low } = payload;
    yield call(api.put, `/transfers/${low.id}`, low);
    yield put(
      CreatorsTransferencePatrimony.updateTransferencePatrimonySuccess(
        payload.id
      )
    );
    toastr.success("A baixa foi atualizada.");
  } catch (err) {}
}
