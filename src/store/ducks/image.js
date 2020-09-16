import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  openModalImage: [],
  hideModalImage: [],

  readImageRequest: ["patrimony_id"],
  readImageSuccess: ["images"],

  uploadImageRequest: ["patrimony_id", "images"],
  uploadImageSuccess: ["images"],

  deleteImageRequest: ["image_id"],
  deleteImageSuccess: ["image_id"],

  downloadImageRequest: ["id"],
});

export const ImagesTypes = Types;
export default Creators;

console.log(ImagesTypes);

/* Initial State */

export const INITIAL_STATE = Immutable({
  exist: false,
  images: [],
  open: false,
  loading_images: false,
});

/* Reducers */

export const open = (state) => {
  return { ...state, open: true };
};

export const hide = (state) => {
  return { ...state, open: false };
};

export const read = (state, { images }) => {
  return { ...state, loading_images: false, images: images };
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [ImagesTypes.OPEN_MODAL_IMAGE]: open,
  [ImagesTypes.HIDE_MODAL_IMAGE]: hide,
  [ImagesTypes.READ_IMAGE_SUCCESS]: read,
});
