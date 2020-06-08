import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE] <- */
  SHOW_PATRIMONY: "@patrimony/SHOW_PATRIMONY",
  HIDE_PATRIMONY: "@patrimony/HIDE_PATRIMONY",

  SHOW_NEW_PATRIMONY: "@patrimony/SHOW_NEW_PATRIMONY",
  HIDE_NEW_PATRIMONY: "@patrimony/HIDE_NEW_PATRIMONY",

  SHOW_UPDATE_PATRIMONY: "@account/SHOW_UPDATE_MODAL_ACCOUNT",
  HIDE_UPDATE_PATRIMONY: "@account/HIDE_UPDATE_MODAL_ACCOUNT",

  /* -> REQUISIÇÔES [ CRUD ] <- */
  CREATE_PATRIMONY_REQUEST: "@account/CREATE_PATRIMONY_REQUEST",
  CREATE_PATRIMONY_SUCCESS: "@account/CREATE_PATRIMONY_SUCCESS",

  READ_PATRIMONY_REQUEST: "@account/READ_PATRIMONY_REQUEST",
  READ_PATRIMONY_SUCCESS: "@account/READ_PATRIMONY_SUCCESS",

  UPDATE_PATRIMONY_REQUEST: "@account/UPDATE_PATRIMONY_REQUEST",
  UPDATE_PATRIMONY_SUCCESS: "@account/UPDATE_PATRIMONY_SUCCESS",

  DELETE_PATRIMONY_REQUEST: "@account/DELETE_PATRIMONY_REQUEST",
  DELETE_PATRIMONY_SUCCESS: "@account/DELETE_PATRIMONY_SUCCESS",
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
};
