import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsUnits } from "../ducks/units";

export function* createUnit({ payload }) {
  try {
    console.log(payload);
    //const response = yield call(api.get, "/users/");
  } catch (err) {}
}

export function* updateUnit({ payload }) {
  try {
    console.log(payload);
    //const response = yield call(api.get, "/users/");
  } catch (err) {}
}
