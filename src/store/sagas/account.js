import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CreatorsAccount } from "../ducks/account";

export function* index({ payload }) {
  try {
    console.log(payload.account);
    //const response = yield call(api.get, "/users/");
  } catch (err) {}
}
