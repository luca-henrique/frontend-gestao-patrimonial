import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPatrimony } from "../ducks/patrimony";
import { toastr } from "react-redux-toastr";

export function* readPatrimony() {
  try {
    const { data } = yield call(api.get, "/patrimony");
    yield put(CreatorsPatrimony.readPatrimonySuccess(data));
  } catch (err) {}
}

export function* createPatrimony({ payload }) {
  try {
    const { data } = yield call(api.post, "/patrimony", payload.data);
    yield put(CreatorsPatrimony.createPatrimonySuccess(data));
    toastr.success("O patrimônio foi criado.");
  } catch (err) {
    toastr.error("Ocorreu um erro ao criar o patrimônio ");
  }
}

export function* deletePatrimony({ payload }) {
  try {
    yield call(api.delete, `/patrimony/${payload.id}`);
    yield put(CreatorsPatrimony.deletePatrimonySuccess(payload.id));
    toastr.error("O patrimônio foi deletado");
  } catch (err) {}
}

export function* updatePatrimony({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/patrimony/${data.id}`, data);
    yield put(CreatorsPatrimony.updatePatrimonySuccess(data));
    toastr.success("O patrimônio foi atualizado");
  } catch (err) {
    toastr.error("Ocorreu um erro ao atualizar o patrimônio ");
  }
}

export function* duplicatePatrimony({ payload }) {
  try {
    const { data } = yield call(api.post, `/patrimony/`, payload.data);
    yield put(CreatorsPatrimony.duplicatePatrimonySuccess(data));
    toastr.success("O patrimônio foi duplicado");
  } catch (error) {
    toastr.error("Ocorreu um erro ao duplicar o patrimônio ");
  }
}
