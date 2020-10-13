import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  readLogRequest: [],
  readLogSuccess: ["logs"],
});

export const LogTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  logs: [],
  loading_logs: false,
});

export const read = (state, { logs }) => {
  return { ...state, loading_logs: false, logs: logs };
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [LogTypes.READ_LOG_SUCCESS]: read,
});
