import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE, CHANGE PASSWORD ] <- */

  SHOW_NEW_MODAL_PREFECTURE: "@prefecture/SHOW_NEW_MODAL_PREFECTURE",
  HIDE_NEW_MODAL_PREFECTURE: "@prefecture/HIDE_NEW_MODAL_PREFECTURE",

  ONBLUR_PREFECTURE_REQUEST: "@prefecture/ONBLUR_PREFECTURE_REQUEST",

  CREATE_PREFECTURE_REQUEST: "@prefecture/CREATE_PREFECTURE_REQUEST",
  CREATE_PREFECTURE_SUCCESS: "@prefecture/CREATE_PREFECTURE_SUCCESS",

  READ_PREFECTURE_REQUEST: "@prefecture/READ_PREFECTURE_REQUEST",
  READ_PREFECTURE_SUCCESS: "@prefecture/READ_PREFECTURE_SUCCESS",

  UPDATE_PREFECTURE_REQUEST: "@prefecture/UPDATE_PREFECTURE_REQUEST",
  UPDATE_PREFECTURE_SUCCESS: "@prefecture/UPDATE_PREFECTURE_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_prefecture: false,
  read_prefecture: {},
  create_prefecture_request: {},
});

export default function Prefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_MODAL_PREFECTURE:
      return { ...state, create_prefecture: true };

    case Types.HIDE_NEW_MODAL_PREFECTURE:
      return { ...state, create_prefecture: false };

    case Types.READ_PREFECTURE_SUCCESS:
      return { ...state, read_prefecture: action.payload };

    default:
      return state;
  }
}

export const Creators = {
  showPrefectureCreate: () => ({
    type: Types.SHOW_NEW_MODAL_PREFECTURE,
  }),

  hidePrefectureCreate: () => ({
    type: Types.HIDE_NEW_MODAL_PREFECTURE,
  }),

  readPrefecturePrefectureRequest: () => ({
    type: Types.READ_PREFECTURE_REQUEST,
  }),

  readPrefecturePrefectureSuccess: (prefeture) => ({
    type: Types.READ_PREFECTURE_SUCCESS,
    payload: {
      prefeture,
    },
  }),

  onBlurPrefectureRequest: (prefeture) => ({
    type: Types.ONBLUR_PREFECTURE_REQUEST,
    payload: {
      prefeture,
    },
  }),

  createPrefectureRequest: (prefeture) => ({
    type: Types.CREATE_PREFECTURE_REQUEST,
    payload: {
      prefeture,
    },
  }),

  updatePrefectureRequest: (prefecture) => ({
    type: Types.UPDATE_PREFECTURE_REQUEST,
    payload: {
      prefecture,
    },
  }),
};
