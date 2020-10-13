import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPatrimony } from "../ducks/patrimony";
import { Creators as ChangePagerCreators } from "../ducks/page";
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

    yield put(ChangePagerCreators.changePageLocation("patrimony_list"));
  } catch (err) {
    toastr.error("Ocorreu um erro ao criar o patrimônio ");
  }
}

export function* deletePatrimony({ payload }) {
  try {
    yield call(api.delete, `/patrimony/${payload.id}`);
    yield put(CreatorsPatrimony.deletePatrimonySuccess(payload.id));
    yield put(ChangePagerCreators.changePageLocation("patrimony_list"));
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
    const { data } = yield call(
      api.post,
      `/duplicate-patrimony/`,
      payload.data
    );
    yield put(CreatorsPatrimony.duplicatePatrimonySuccess(data));
    toastr.success("O patrimônio foi duplicado");
    yield put(ChangePagerCreators.changePageLocation("patrimony_list"));
  } catch (error) {
    toastr.error("Ocorreu um erro ao duplicar o patrimônio ");
  }
}
