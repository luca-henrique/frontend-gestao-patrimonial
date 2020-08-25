import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsSector } from "../ducks/sectors";
import { toastr } from "react-redux-toastr";

export function* readSector({ payload }) {
  try {
    const { data } = yield call(api.get, `/sectors/${payload.id}`);
    yield put(CreatorsSector.readSectorsSuccess(data));
  } catch (err) {}
}

export function* createSector({ payload }) {
  try {
    const { data } = yield call(api.post, "/sector", payload.data);
    yield put(CreatorsSector.createSectorSuccess(data));
    toastr.success("O setor foi criado.");
  } catch (err) {}
}

export function* deleteSector({ payload }) {
  try {
    yield call(api.delete, `/sector/${payload.id}`);
    yield put(CreatorsSector.deleteSectorSuccess(payload.id));
    toastr.error("O setor foi removido");
  } catch (err) {}
}

export function* updateSector({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/sector/${data.id}`, data);
    yield put(CreatorsSector.updateSectorSuccess(data));
    toastr.success("O setor foi atualizado.");
  } catch (err) {}
}
