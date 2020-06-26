import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPrefecture } from "../ducks/prefecture";

export function* readPrefecture() {
  try {
    const { data } = yield call(api.get, "/prefecture");
    console.log(data);
    if (data.length > 0) {
      yield put(CreatorsPrefecture.readPrefecturePrefectureSuccess(data));
    } else {
      yield put(CreatorsPrefecture.showPrefectureCreate());
    }
  } catch (err) {}
}
