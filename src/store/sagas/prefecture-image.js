import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import ActionsImagePrefecture from "../ducks/prefecture-image";

import { toastr } from "react-redux-toastr";

export function* readImagePrefecture({ prefecture_id }) {
  try {
    const { data } = yield call(api.get, `/prefecture/image/${prefecture_id}`, {
      responseType: "arraybuffer",
    });

    if (!data) {
      yield put(ActionsImagePrefecture.readImagePrefectureSuccess(false));
    }
    yield put(ActionsImagePrefecture.readImagePrefectureSuccess(true));
  } catch (err) {}
}

export function* createPrefectureContact({ payload }) {
  try {
    const { data } = yield call(api.post, "/prefecture-contact", payload.data);
  } catch (err) {}
}
