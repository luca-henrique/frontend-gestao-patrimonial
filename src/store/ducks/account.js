import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE, CHANGE PASSWORD ] <- */

  /* Abrir/fechar modal para criar uma nova conta */
  SHOW_NEW_MODAL_ACCOUNT: "@account/SHOW_NEW_MODAL_ACCOUNT",
  HIDE_NEW_MODAL_ACCOUNT: "@account/HIDE_NEW_MODAL_ACCOUNT",

  /* Abrir/fechar modal para atualizar a conta */
  SHOW_UPDATE_MODAL_ACCOUNT: "@account/SHOW_UPDATE_MODAL_ACCOUNT",
  HIDE_UPDATE_MODAL_ACCOUNT: "@account/HIDE_UPDATE_MODAL_ACCOUNT",

  /* Abrir/fechar modal para atualizar password */
  SHOW_CHANGER_PASSWORD_ACCOUNT: "@account/SHOW_CHANGER_PASSWORD_ACCOUNT",
  HIDE_CHANGER_PASSWORD_ACCOUNT: "@account/HIDE_CHANGER_PASSWORD_ACCOUNT",

  /* -> REQUISIÇÔES [ CRUD+CHANGE PASSWORD ] <- */
  READ_ACCOUNT_JOINED_REQUEST: "@account/READ_ACCOUNT_JOINED",

  READ_ACCOUNT_JOINED_SUCCESS: "@account/READ_ACCOUNT_JOINED_SUCCESS",

  CREATE_ACCOUNT_REQUEST: "@account/CREATE_ACCOUNT_REQUEST",
  CREATE_ACCOUNT_SUCCESS: "@account/CREATE_ACCOUNT_SUCCESS",

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
  password_account: { visible: false },

  account_joined: { role: null },

  create_account_request: {},
  read_accounts: [],
  update_account_request: {},
  delete_account_request: 0,
  update_password_request: 0,
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
        password_account: { visible: true },
      };

    case Types.HIDE_CHANGER_PASSWORD_ACCOUNT:
      return { ...state, password_account: { visible: false } };

    case Types.READ_ACCOUNT_JOINED_SUCCESS:
      return { ...state, account_joined: action.payload.account };

    case Types.READ_ACCOUNT_SUCCESS:
      return { ...state, read_accounts: action.payload.accounts };

    case Types.CREATE_ACCOUNT_REQUEST:
      return { ...state, account: action.payload.account };

    case Types.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        read_accounts: [...state.read_accounts, action.payload.account],
      };

    case Types.UPDATE_ACCOUNT_REQUEST:
      return { ...state, update_account_request: action.payload.account };

    case Types.UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        read_accounts: [
          ...state.read_accounts.map((account) => {
            if (account.id === action.payload.account.id) {
              console.log(account.tableData);
              console.log(action.payload.account);
              return {
                ...action.payload.account,
                tableData: account.tableData,
              };
            }
          }),
        ],
      };

    case Types.DELETE_ACCOUNT_REQUEST:
      return {
        ...state,
        delete_account_request: action.payload.id,
      };

    case Types.DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        read_accounts: [
          ...state.read_accounts.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

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

  showChangePasswordAccount: () => ({
    type: Types.SHOW_CHANGER_PASSWORD_ACCOUNT,
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

  createAccountSuccess: (account) => ({
    type: Types.CREATE_ACCOUNT_SUCCESS,
    payload: {
      account,
    },
  }),

  readAccountJoinedRequest: () => ({
    type: Types.READ_ACCOUNT_JOINED_REQUEST,
  }),

  readAccountJoinedSuccess: (account) => ({
    type: Types.READ_ACCOUNT_JOINED_SUCCESS,
    payload: {
      account,
    },
  }),

  readAccountRequest: () => ({
    type: Types.READ_ACCOUNT_REQUEST,
  }),

  readAccountSuccess: (accounts) => ({
    type: Types.READ_ACCOUNT_SUCCESS,
    payload: {
      accounts,
    },
  }),

  updateAccountRequest: (account) => ({
    type: Types.UPDATE_ACCOUNT_REQUEST,
    payload: {
      account,
    },
  }),

  updateAccountSuccess: (account) => ({
    type: Types.UPDATE_ACCOUNT_SUCCESS,
    payload: {
      account,
    },
  }),

  deleteAccountRequest: (id) => ({
    type: Types.DELETE_ACCOUNT_REQUEST,
    payload: {
      id,
    },
  }),

  deleteAccountSuccess: (id) => ({
    type: Types.DELETE_ACCOUNT_SUCCESS,
    payload: {
      id,
    },
  }),

  changerPasswordRequest: () => ({
    type: Types.ACCOUNT_CHANGE_PASSWORD_REQUEST,
  }),
};
