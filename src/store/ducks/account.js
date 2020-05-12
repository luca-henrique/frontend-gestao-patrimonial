import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE, CHANGE PASSWORD ] <- */

  SHOW_NEW_MODAL_ACCOUNT: "@account/SHOW_NEW_MODAL_ACCOUNT",
  HIDE_NEW_MODAL_ACCOUNT: "@account/HIDE_NEW_MODAL_ACCOUNT",

  SHOW_UPDATE_MODAL_ACCOUNT: "@account/SHOW_UPDATE_MODAL_ACCOUNT",
  HIDE_UPDATE_MODAL_ACCOUNT: "@account/HIDE_UPDATE_MODAL_ACCOUNT",

  SHOW_CHANGER_PASSWORD_ACCOUNT: "@account/SHOW_CHANGER_PASSWORD_ACCOUNT",
  HIDE_CHANGER_PASSWORD_ACCOUNT: "@account/HIDE_CHANGER_PASSWORD_ACCOUNT",

  CREATE_ACCOUNT_REQUEST: "@account/CREATE_ACCOUNT_REQUEST",
  CREATE_ACCOUNT_SUCCESS: "@account/CREATE_ACCOUNT_SUCCESS",

  /* -> REQUISIÇÔES [ CRUD+CHANGE PASSWORD ] <- */
  READ_ACCOUNT_REQUEST: "@account/READ_ACCOUNT_REQUEST",
  READ_ACCOUNT_SUCCESS: "@account/READ_ACCOUNT_SUCCESS",

  UPDATE_ACCOUNT_REQUEST: "@account/UPDATE_ACCOUNT_REQUEST",
  UPDATE_ACCOUNT_SUCCESS: "@account/UPDATE_ACCOUNT_SUCCESS",

  DELETE_ACCOUNT_REQUEST: "@account/DELETE_ACCOUNT_REQUEST",
  DELETE_ACCOUNT_SUCCESS: "@account/DELETE_ACCOUNT_SUCCESS",

  ACCOUNT_CHANGE_PASSWORD_REQUEST: "@account/ACCOUNT_CHANGE_PASSWORD_REQUEST",
  ACCOUNT_CHANGE_PASSWORD_SUCCESS: "@account/ACCOUNT_CHANGE_PASSWORD_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_account: false,
  update_account: { visible: false, data: [] },
  password_account: { visible: false, account_id: null },
});

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_MODAL_ACCOUNT:
      return { ...state, create_account: true };
    case Types.HIDE_NEW_MODAL_ACCOUNT:
      return { ...state, create_account: false };

    case Types.SHOW_UPDATE_MODAL_ACCOUNT:
      return {
        ...state,
        update_account: { visible: true, data: action.payload.data },
      };
    case Types.HIDE_UPDATE_MODAL_ACCOUNT:
      return { ...state, update_account: { visible: false, data: [] } };

    case Types.SHOW_CHANGER_PASSWORD_ACCOUNT:
      return {
        ...state,
        password_account: { visible: true, account_id: action.payload.id },
      };
    case Types.HIDE_CHANGER_PASSWORD_ACCOUNT:
      return { ...state, password_account: { visible: false, account_id: "" } };

    case Types.CREATE_ACCOUNT_REQUEST:
      return { ...state, account: action.payload.account };

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

  showUpdateAccount: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_ACCOUNT,
    payload: {
      data,
    },
  }),

  hideUpdateAccount: () => ({
    type: Types.HIDE_UPDATE_MODAL_ACCOUNT,
  }),

  showChangePasswordAccount: (id) => ({
    type: Types.SHOW_CHANGER_PASSWORD_ACCOUNT,
    payload: {
      id,
    },
  }),

  hideChangePasswordAccount: () => ({
    type: Types.HIDE_CHANGER_PASSWORD_ACCOUNT,
  }),

  createAccountRequest: (account) => ({
    type: Types.CREATE_ACCOUNT_REQUEST,
    payload: {
      account,
    },
  }),

  changerPasswordRequest: () => ({
    type: Types.ACCOUNT_CHANGE_PASSWORD_REQUEST,
  }),
};
