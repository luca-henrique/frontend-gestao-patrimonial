import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE] <- */
  SHOW_PATRIMONY: "@patrimony/SHOW_PATRIMONY",
  HIDE_PATRIMONY: "@patrimony/HIDE_PATRIMONY",

  SHOW_NEW_PATRIMONY: "@patrimony/SHOW_NEW_PATRIMONY",
  HIDE_NEW_PATRIMONY: "@patrimony/HIDE_NEW_PATRIMONY",

  SHOW_UPDATE_PATRIMONY: "@patrimony/SHOW_UPDATE_MODAL_ACCOUNT",
  HIDE_UPDATE_PATRIMONY: "@patrimony/HIDE_UPDATE_MODAL_ACCOUNT",

  /* -> REQUISIÇÔES [ CRUD ] <- */
  CREATE_PATRIMONY_REQUEST: "@patrimony/CREATE_PATRIMONY_REQUEST",
  CREATE_PATRIMONY_SUCCESS: "@patrimony/CREATE_PATRIMONY_SUCCESS",

  READ_PATRIMONY_REQUEST: "@patrimony/READ_PATRIMONY_REQUEST",
  READ_PATRIMONY_SUCCESS: "@patrimony/READ_PATRIMONY_SUCCESS",

  UPDATE_PATRIMONY_REQUEST: "@patrimony/UPDATE_PATRIMONY_REQUEST",
  UPDATE_PATRIMONY_SUCCESS: "@patrimony/UPDATE_PATRIMONY_SUCCESS",

  DELETE_PATRIMONY_REQUEST: "@patrimony/DELETE_PATRIMONY_REQUEST",
  DELETE_PATRIMONY_SUCCESS: "@patrimony/DELETE_PATRIMONY_SUCCESS",

  DUPLICATE_PATRIMONY_REQUEST: "@patrimony/DUPLICATE_PATRIMONY_REQUEST",
  DUPLICATE_PATRIMONY_SUCCESS: "@patrimony/DUPLICATE_PATRIMONY_SUCCESS",
};

const INITIAL_STATE = Immutable({
  show_patrimony: {},
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_PATRIMONY:
      return { ...state, show_patrimony: action.payload.item };
    case Types.HIDE_PATRIMONY:
      return { ...state, show_patrimony: {} };

    default:
      return state;
  }
}

export const Creators = {
  showPatrimony: (item) => ({
    type: Types.SHOW_PATRIMONY,
    payload: {
      item,
    },
  }),

  hidePatrimony: () => ({
    type: Types.HIDE_PATRIMONY,
  }),

  readPatrimonyRequest: (data) => ({
    type: Types.READ_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  readPatrimonySuccess: (data) => ({
    type: Types.READ_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  createPatrimonyRequest: (data) => ({
    type: Types.CREATE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  createPatrimonySuccess: (data) => ({
    type: Types.CREATE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  updatePatrimonyRequest: (data) => ({
    type: Types.UPDATE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  updatePatrimonySuccess: (data) => ({
    type: Types.UPDATE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  deletePatrimonyRequest: (id) => ({
    type: Types.DELETE_PATRIMONY_REQUEST,
    payload: {
      id,
    },
  }),

  deletePatrimonySuccess: (id) => ({
    type: Types.DELETE_PATRIMONY_SUCCESS,
    payload: {
      id,
    },
  }),

  duplicatePatrimonyRequest: (data) => ({
    type: Types.DUPLICATE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  duplicatePatrimonySuccess: (data) => ({
    type: Types.DUPLICATE_PATRIMONY_SUCCESS,
    pyaload: {
      data,
    },
  }),
};
