import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import ActionsLog from "../ducks/log";

export function* readLogs() {
  try {
    const { data } = yield call(api.get, `logger`);

    yield put(ActionsLog.readLogSuccess(data));
  } catch (err) {}
}
