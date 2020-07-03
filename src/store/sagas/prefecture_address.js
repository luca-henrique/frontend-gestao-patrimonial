import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsPrefectureAddress } from "../ducks/prefecture_address";

export function* readPrefectureAddress() {
  try {
    const { data } = yield call(api.get, `/get-prefecture-address`);
    console.log("address");
    console.log(data);
    yield put(CreatorsPrefectureAddress.readPrefectureAddressSuccess(data));
  } catch (err) {}
}

export function* createPrefectureAddress({ payload }) {
  try {
    const { address } = payload;
    const { data } = yield call(api.post, "/prefecture-address", address);
    yield put(CreatorsPrefectureAddress.readPrefectureAddressSuccess(data));
  } catch (err) {}
}

export function* updatePrefectureAddress({ payload }) {
  try {
    const { address } = payload;
    console.log(address);
    const { data } = yield call(
      api.put,
      `/prefecture-address/${address.id}`,
      address
    );
    console.log(data);
  } catch (err) {}
}
