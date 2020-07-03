import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  licenceCheckRequest: ["token"],
  licenseRequest: ["token"],
  licenseSuccess: ["token"],
});

export const LicenseTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  isLisenced: !!localStorage.getItem("@License:isLicensed"),
});

/* Reducers */

export const success = (state, { token }) => {
  return { ...state, isLisenced: token };
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LICENCE_CHECK_REQUEST]: success,
  [Types.LICENSE_SUCCESS]: success,
});
