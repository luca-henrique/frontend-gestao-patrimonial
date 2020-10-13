import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import ActionsImagePrefecture from "../ducks/prefecture-image";

import { toastr } from "react-redux-toastr";

export function* readImagePrefecture({ prefecture_id }) {
  try {
    const response = yield call(api.get, `/prefecture/image/${prefecture_id}`, {
      responseType: "arraybuffer",
    });

    const url = new URL(response.config.baseURL + response.config.url);

    yield put(ActionsImagePrefecture.readImagePrefectureSuccess(true, url));
  } catch (err) {
    yield put(ActionsImagePrefecture.readImagePrefectureSuccess(false, ""));
  }
}

export function* uploadPrefectureImage({ prefecture_id, image }) {
  try {
    const data = new FormData();
    data.append("image", image, image.name, image.type);

    const response = yield call(
      api.post,
      `/prefecture/image/${prefecture_id}`,
      data
    );

    const url = new URL(response.config.baseURL + response.config.url);

    console.log(url);

    yield put(ActionsImagePrefecture.uploadImagePrefectureSuccess(true, url));
  } catch (err) {
    yield put(ActionsImagePrefecture.uploadImagePrefectureSuccess(false, ""));
  }
}

export function* updatePrefectureImage({ prefecture_id, image }) {
  try {
    const data = new FormData();
    data.append("image", image, image.name, image.type);

    const response = yield call(
      api.put,
      `/prefecture/image/${prefecture_id}`,
      data
    );

    console.log(response);
    const url = new URL(response.config.baseURL + response.config.url);

    console.log("aqui no url");
    console.log(url);

    yield put(ActionsImagePrefecture.uploadImagePrefectureSuccess(true, url));
  } catch (err) {
    yield put(ActionsImagePrefecture.updateImagePrefectureSuccess(false, ""));
  }
}
