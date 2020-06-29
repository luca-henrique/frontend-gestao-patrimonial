import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPrefecture } from "../ducks/prefecture";
import { Creators as CreatorsPrefectureAddress } from "../ducks/prefecture_address";

export function* readPrefecture() {
  try {
    const { data } = yield call(api.get, "/prefecture");
    console.log(data);
    if (data.length > 0) {
      yield put(
        CreatorsPrefecture.readPrefecturePrefectureSuccess(data[0].prefecture)
      );
      yield put(CreatorsPrefectureAddress.readPrefectureAddressRequest());
    } else {
      yield put(CreatorsPrefecture.showPrefectureCreate());
    }
  } catch (err) {}
}

export function* createPrefecture({ payload }) {
  try {
    const { prefeture } = payload;
    const { data } = yield call(api.post, "/prefecture", prefeture);
    console.log(data);
  } catch (err) {}
}
