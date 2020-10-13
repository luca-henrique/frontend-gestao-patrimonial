import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  readImagePrefectureRequest: ["prefecture_id"],
  readImagePrefectureSuccess: ["exist", "url"],

  uploadImagePrefectureRequest: ["prefecture_id", "image"],
  uploadImagePrefectureSuccess: ["exist", "url"],

  updateImagePrefectureRequest: ["prefecture_id", "image"],
  updateImagePrefectureSuccess: ["exist", "image"],
});

export const PrefectureImageTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  exist: false,
  url: "",
});

/* Reducers */

export const success = (state, { exist, url }) => {
  return { ...state, exist: exist, url: url };
};

export const uploadSuccess = (state, { exist, url }) => {
  return { ...state, exist: exist, url: url };
};

export const updateSuccess = (state, { exist, url }) => {
  console.log("duks");
  console.log(url);
  return { ...state, exist: exist, url: url };
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.READ_IMAGE_PREFECTURE_SUCCESS]: success,
  [Types.UPLOAD_IMAGE_PREFECTURE_SUCCESS]: uploadSuccess,
  [Types.UPDATE_IMAGE_PREFECTURE_SUCCESS]: updateSuccess,
});
