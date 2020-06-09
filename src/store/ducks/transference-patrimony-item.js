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
    "@transference-patrimony/HIDE_MODAL_TRANSFERENCE_PATRIMONY",

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
  show_modal_list_transference_patrimony: { visible: false, id_patrimony: 0 },

  show_modal_create_transference_patrimony: { visible: false, id_patrimony: 0 },

  show_modal_update_transference_patrimony: {
    visible: false,
    id_transference: 0,
  },

  create_occurrence_patrimony_request: { id_patrimony: 0, transference: {} },

  read_occurrence_patrimony: { id_patrimony: 0, transferences: [] },

  update_occurrence_patrimony_request: { id_transference: 0, transference: {} },

  delete_occurrence_patrimony_request: { id_transference: 0 },
});

export default function transferencePatrimony(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_LIST_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        show_modal_list_transference_patrimony: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_LIST_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        show_modal_list_transference_patrimony: {
          visible: false,
          id_patrimony: 0,
        },
      };

    case Types.SHOW_MODAL_CREATE_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        show_modal_create_transference_patrimony: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_CREATE_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        show_modal_create_transference_patrimony: {
          visible: false,
          id_patrimony: 0,
        },
      };

    case Types.SHOW_MODAL_UPDATE_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        show_modal_update_transference_patrimony: {
          visible: true,
          id_transference: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_UPDATE_TRANSFERENCE_PATRIMONY:
      return {
        ...state,
        show_modal_update_transference_patrimony: {
          visible: false,
          id_transference: 0,
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
    type: Types.SHOW_MODAL_LIST_TRANSFERENCE_PATRIMONY,
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

  showModalUpdateTransferencePatrimony: (id) => ({
    type: Types.SHOW_MODAL_UPDATE_TRANSFERENCE_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalUpdateTransferencePatrimony: () => ({
    type: Types.HIDE_MODAL_UPDATE_TRANSFERENCE_PATRIMONY,
  }),
};
