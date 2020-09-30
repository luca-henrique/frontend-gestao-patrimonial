import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  readImagePrefectureRequest: ["prefecture_id"],

  readImagePrefectureSuccess: ["exist"],

  uploadImagePrefectureRequest: ["prefecture_id", "image"],
  uploadImagePrefectureSuccess: ["exist"],

  updateImagePrefectureRequest: ["prefecture_id", "image"],
  updateImagePrefectureSuccess: ["exist"],
});

export const PrefectureImageTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  exist: false,
});

/* Reducers */

export const success = (state, { exist }) => {
  return { ...state, exist: exist };
};

export const uploadSuccess = (state, { exist }) => {
  console.log(exist);
  return { ...state, exist: exist };
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.READ_IMAGE_PREFECTURE_SUCCESS]: success,
});
