import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE, CHANGE PASSWORD ] <- */

  SHOW_NEW_MODAL_PREFECTURE: "@prefecture/SHOW_NEW_MODAL_PREFECTURE",
  HIDE_NEW_MODAL_PREFECTURE: "@prefecture/HIDE_NEW_MODAL_PREFECTURE",

  CREATE_PREFECTURE_REQUEST: "@prefecture/CREATE_PREFECTURE_REQUEST",
  CREATE_PREFECTURE_SUCCESS: "@prefecture/CREATE_PREFECTURE_SUCCESS",

  READ_PREFECTURE_REQUEST: "@prefecture/READ_PREFECTURE_REQUEST",
  READ_PREFECTURE_SUCCESS: "@prefecture/READ_PREFECTURE_SUCCESS",

  UPDATE_PREFECTURE_REQUEST: "@prefecture/UPDATE_PREFECTURE_REQUEST",
  UPDATE_PREFECTURE_SUCCESS: "@prefecture/UPDATE_PREFECTURE_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_prefecture: true,
});

export default function Prefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_MODAL_PREFECTURE:
      return { ...state, create_prefecture: true };

    case Types.HIDE_NEW_MODAL_PREFECTURE:
      return { ...state, create_prefecture: false };

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
};
