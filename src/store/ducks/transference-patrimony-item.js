import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_LIST_TRANSFERENCE_PATRIMONY:
    "@transference-patrimony/SHOW_MODAL_LIST_TRANSFERENCE_PATRIMONY",
  HIDE_MODAL_LIST_TRANSFERENCE_PATRIMONY:
    "@transference-patrimony/HIDE_MODAL_LIST_TRANSFERENCE_PATRIMONY",

  SHOW_MODAL_CREATE_TRANSFERENCE_PATRIMONY:
    "@transference-patrimony/SHOW_MODAL_CREATE_TRANSFERENCE_PATRIMONY",
  HIDE_MODAL_CREATE_TRANSFERENCE_PATRIMONY:
    "@transference-patrimony/HIDE_MODAL_TRANSFERENCE_PATRIMONY",

  SHOW_MODAL_UPDATE_TRANSFERENCE_PATRIMONY:
    "@transference-patrimony/SHOW_MODAL_TRANSFERENCE_PATRIMONY",
  HIDE_MODAL_UPDATE_TRANSFERENCE_PATRIMONY:
    "@transference-patrimony/HIDE_MODAL_UPDATE_TRANSFERENCE_PATRIMONY",

  /* Requisições */
  CREATE_TRANSFERENCE_PATRIMONY_REQUEST:
    "@transference-patrimony/CREATE_TRANSFERENCE_PATRIMONY_REQUEST",

  READ_TRANSFERENCE_PATRIMONY_REQUEST:
    "@transference-patrimony/READ_TRANSFERENCE_PATRIMONY_REQUEST",

  READ_TRANSFERENCE_PATRIMONY_SUCCESS:
    "@transference-patrimony/READ_TRANSFERENCE_PATRIMONY_SUCCESS",

  UPDATE_TRANSFERENCE_PATRIMONY_REQUEST:
    "@transference-patrimony/UPDATE_TRANSFERENCE_PATRIMONY_REQUEST",

  DELETE_TRANSFERENCE_PATRIMONY_REQUEST:
    "@transference-patrimony/DELETE_TRANSFERENCE_PATRIMONY_REQUEST",
};

const INITIAL_STATE = Immutable({
  transference_patrimony: { visible: false, id_patrimony: 0 },

  create_transference_patrimony: { visible: false, id_patrimony: 0 },

  update_transference_patrimony: {
    visible: false,
    transference: {},
  },

  read_transference_patrimony: [],
  loading_transference_patrimony: false,
});

export default function transferencePatrimony(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_LIST_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        transference_patrimony: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_LIST_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        transference_patrimony: {
          visible: false,
          id_patrimony: 0,
        },
      };

    case Types.SHOW_MODAL_CREATE_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        create_transference_patrimony: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_CREATE_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        create_transference_patrimony: {
          visible: false,
          id_patrimony: 0,
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalListTransferencePatrimony: (id) => ({
    type: Types.SHOW_MODAL_LIST_TRANSFERENCE_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalListTransferencePatrimony: () => ({
    type: Types.HIDE_MODAL_LIST_TRANSFERENCE_PATRIMONY,
  }),

  showModalCreateTransferencePatrimony: (id) => ({
    type: Types.SHOW_MODAL_CREATE_TRANSFERENCE_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalCreateTransferencePatrimony: () => ({
    type: Types.HIDE_MODAL_CREATE_TRANSFERENCE_PATRIMONY,
  }),

  showModalUpdateTransferencePatrimony: (data) => ({
    type: Types.SHOW_MODAL_UPDATE_TRANSFERENCE_PATRIMONY,
    payload: {
      data,
    },
  }),

  hideModalUpdateTransferencePatrimony: () => ({
    type: Types.HIDE_MODAL_UPDATE_TRANSFERENCE_PATRIMONY,
  }),
};
