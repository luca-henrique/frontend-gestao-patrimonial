import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsOccurrenceItem } from "../ducks/occurrence-patrimony-item";
import { toastr } from "react-redux-toastr";

export function* readOccurrencePatrimony({ payload }) {
  try {
    const { data } = yield call(api.get, `/occurrence-patrimony/${payload.id}`);
    yield put(
      CreatorsOccurrenceItem.readOccurrencePatrimonySuccess(data, true)
    );
  } catch (err) {
    yield put(CreatorsOccurrenceItem.readOccurrencePatrimonySuccess({}, false));
  }
}

export function* createOccurrencePatrimony({ payload }) {
  try {
    const { data } = yield call(
      api.post,
      "/occurrence-patrimony",
      payload.occurrence
    );
    yield put(CreatorsOccurrenceItem.createOccurrencePatrimonySuccess(data));
    toastr.success("A ocorrência foi adicionada ao patrimônio.");
  } catch (err) {}
}

export function* updateOccurencePatrimony({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, `/occurrence-patrimony/${data.id}`, data);
    yield put(CreatorsOccurrenceItem.updateOccurrencePatrimonySuccess(data));
    toastr.success("A ocorrência foi atualizada.");
  } catch (err) {}
}
