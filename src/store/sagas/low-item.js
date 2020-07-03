import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsLowItem } from "../ducks/low-item";

export function* readLowItem() {
  try {
    //const { data } = yield call(api.get, "/low-item");
    yield put(CreatorsLowItem.readLowItemSuccess());
  } catch (err) {}
}

export function* createLowItem({ payload }) {
  try {
    const { low } = payload;

    console.log(low);

    //const { data } = yield call(api.post, "/user", account);

    yield put(CreatorsLowItem.createLowItemSuccess(low));
  } catch (err) {}
}

export function* deleteLowItem({ payload }) {
  try {
    console.log(payload);
    // yield call(api.delete, `/user/${payload.id}`);
    yield put(CreatorsLowItem.deleteLowItemSuccess(payload.id));
  } catch (err) {}
}

export function* updateLowItem({ payload }) {
  try {
    const { low } = payload;

    console.log(low);

    //const { data } = yield call(api.put, `/user/${account.id}`, account);

    yield put(CreatorsLowItem.updateLowItemSuccess(low));
  } catch (err) {}
}
