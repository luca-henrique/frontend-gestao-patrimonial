import Immutable from "seamless-immutable";

export const Types = {
  CREATE_PREFECTURE_REQUEST: "@prefecture/CREATE_PREFECTURE_REQUEST",
  CREATE_PREFECTURE_SUCCESS: "@prefecture/CREATE_PREFECTURE_SUCCESS",
  CREATE_PREFECTURE_COMPLETE: "@prefecture/CREATE_PREFECTURE_COMPLETE",

  READ_PREFECTURE_REQUEST: "@prefecture/READ_PREFECTURE_REQUEST",
  READ_PREFECTURE_FAIL: "@prefecture/READ_PREFECTURE_FAIL",
  READ_PREFECTURE_SUCCESS: "@prefecture/READ_PREFECTURE_SUCCESS",

  UPDATE_PREFECTURE_REQUEST: "@prefecture/UPDATE_PREFECTURE_REQUEST",
  UPDATE_PREFECTURE_SUCCESS: "@prefecture/UPDATE_PREFECTURE_SUCCESS",
};

const INITIAL_STATE = Immutable({
  exist: false,
  prefecture: false,
});

export default function Prefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.READ_PREFECTURE_SUCCESS:
      return {
        ...state,
        prefecture: action.payload.data,
        exist: true,
      };

    case Types.UPDATE_PREFECTURE_SUCCESS:
      return { ...state, prefecture: action.payload.data };

    case Types.CREATE_PREFECTURE_SUCCESS:
      return { ...state, prefecture: action.payload.data };

    case Types.READ_PREFECTURE_FAIL:
      return { ...state, exist: false };

    case Types.CREATE_PREFECTURE_COMPLETE:
      return { ...state, exist: true };

    default:
      return state;
  }
}

export const Creators = {
  readPrefecturePrefectureRequest: () => ({
    type: Types.READ_PREFECTURE_REQUEST,
  }),

  readPrefecturePrefectureFail: () => ({
    type: Types.READ_PREFECTURE_FAIL,
  }),

  readPrefecturePrefectureSuccess: (data) => ({
    type: Types.READ_PREFECTURE_SUCCESS,
    payload: {
      data,
    },
  }),

  createPrefectureRequest: (prefecture) => ({
    type: Types.CREATE_PREFECTURE_REQUEST,
    payload: {
      prefecture,
    },
  }),

  createPrefectureSuccess: (data) => ({
    type: Types.CREATE_PREFECTURE_SUCCESS,
    payload: {
      data,
    },
  }),

  createPrefectureComplete: () => ({
    type: Types.CREATE_PREFECTURE_COMPLETE,
  }),

  updatePrefectureRequest: (data) => ({
    type: Types.UPDATE_PREFECTURE_REQUEST,
    payload: {
      data,
    },
  }),

  updatePrefectureSuccess: (data) => ({
    type: Types.UPDATE_PREFECTURE_SUCCESS,
    payload: {
      data,
    },
  }),
};
