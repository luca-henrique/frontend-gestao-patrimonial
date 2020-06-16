import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  licenseRequest: ["token"],
  licenseSuccess: ["token"],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  isLisenced: false,
  token: {},
});

/* Reducers */

export const success = (state, { token }) => {
  return { ...state, isLisenced: token };
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {});
