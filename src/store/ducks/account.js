import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE, CHANGE PASSWORD ] <- */

  SHOW_NEW_MODAL_ACCOUNT: "@account/SHOW_NEW_MODAL_ACCOUNT",
  HIDE_NEW_MODAL_ACCOUNT: "@account/HIDE_NEW_MODAL_ACCOUNT",

  SHOW_UPDATE_MODAL_ACCOUNT: "@account/SHOW_UPDATE_MODAL_ACCOUNT",
  HIDE_UPDATE_MODAL_ACCOUNT: "@account/HIDE_UPDATE_MODAL_ACCOUNT",

  SHOW_CHANGER_PASSWORD_MODAL: "@account/SHOW_CHANGER_PASSWORD_MODAL",
  HIDE_CHANGER_PASSWORD_MODAL: "@account/HIDE_CHANGER_PASSWORD_MODAL",

  CREATE_ACCOUNT_REQUEST: "@account/CREATE_ACCOUNT_REQUEST",
  CREATE_ACCOUNT_SUCCESS: "@account/CREATE_ACCOUNT_SUCCESS",

  /* -> REQUISIÇÔES [ CRUD+CHANGE PASSWORD ] <- */
  READ_ACCOUNT_REQUEST: "@account/READ_ACCOUNT_REQUEST",
  READ_ACCOUNT_SUCCESS: "@account/READ_ACCOUNT_SUCCESS",

  UPDATE_ACCOUNT_REQUEST: "@account/UPDATE_ACCOUNT_REQUEST",
  UPDATE_ACCOUNT_SUCCESS: "@account/UPDATE_ACCOUNT_SUCCESS",

  DELETE_ACCOUNT_REQUEST: "@account/DELETE_ACCOUNT_REQUEST",
  DELETE_ACCOUNT_SUCCESS: "@account/DELETE_ACCOUNT_SUCCESS",

  CHANGER_PASSWORD_REQUEST: "@account/CHANGER_PASSWORD_REQUEST",
  CHANGER_PASSWORD_SUCCESS: "@account/CHANGER_PASSWORD_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create: false,
  update: { visible: false, account_id: null },
  password: { visible: false, account_id: null },
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_MODAL_ACCOUNT:
      return { ...state, create: true };
    case Types.HIDE_NEW_MODAL_ACCOUNT:
      return { ...state, create: false };

    case Types.SHOW_UPDATE_MODAL_ACCOUNT:
      return {
        ...state,
        update: { visible: true, account_id: action.payload.id },
      };
    case Types.HIDE_UPDATE_MODAL_ACCOUNT:
      return { ...state, update: { visible: false, account_id: null } };

    case Types.SHOW_CHANGER_PASSWORD_MODAL:
      return {
        ...state,
        password: { visible: true, account_id: action.payload.id },
      };
    case Types.HIDE_CHANGER_PASSWORD_MODAL:
      return { ...state, password: { visible: false, account_id: null } };

    default:
      return state;
  }
}

export const Creators = {
  showNewAccount: () => ({
    type: Types.SHOW_NEW_MODAL_ACCOUNT,
  }),

  hideNewAccount: () => ({
    type: Types.HIDE_NEW_MODAL_ACCOUNT,
  }),

  readUserRequest: () => ({
    type: Types.READ_USER_REQUEST,
  }),

  readUserSuccess: (user) => ({
    type: Types.READ_USER_SUCCESS,
    payload: { user },
  }),

  updateUserRequest: (user) => ({
    type: Types.UPDATE_USER_REQUEST,
    payload: { user },
  }),
  updateUserSucess: (user) => ({
    type: Types.UPDATE_USER_SUCESS,
    payload: { user },
  }),
  changerPasswordRequest: (password) => ({
    type: Types.CHANGER_PASSWORD_REQUEST,
    payload: { password },
  }),
};
