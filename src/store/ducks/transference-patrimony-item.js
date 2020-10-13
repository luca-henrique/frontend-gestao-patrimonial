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

  CREATE_TRANSFERENCE_PATRIMONY_SUCCESS:
    "@transference-patrimony/CREATE_TRANSFERENCE_PATRIMONY_SUCCESS",

  READ_TRANSFERENCE_PATRIMONY_REQUEST:
    "@transference-patrimony/READ_TRANSFERENCE_PATRIMONY_REQUEST",

  READ_TRANSFERENCE_PATRIMONY_SUCCESS:
    "@transference-patrimony/READ_TRANSFERENCE_PATRIMONY_SUCCESS",

  UPDATE_TRANSFERENCE_PATRIMONY_REQUEST:
    "@transference-patrimony/UPDATE_TRANSFERENCE_PATRIMONY_REQUEST",

  UPDATE_TRANSFERENCE_PATRIMONY_SUCCESS:
    "@transference-patrimony/UPDATE_TRANSFERENCE_PATRIMONY_SUCCESS",

  DELETE_TRANSFERENCE_PATRIMONY_REQUEST:
    "@transference-patrimony/DELETE_TRANSFERENCE_PATRIMONY_REQUEST",

  DELETE_TRANSFERENCE_PATRIMONY_SUCCESS:
    "@transference-patrimony/DELETE_TRANSFERENCE_PATRIMONY_SUCCESS",
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

    case Types.READ_TRANSFERENCE_PATRIMONY_REQUEST:
      return { ...state, loading_transference_patrimony: true };

    case Types.READ_TRANSFERENCE_PATRIMONY_SUCCESS:
      return {
        ...state,
        loading_transference_patrimony: false,
        read_transference_patrimony: action.payload.data,
      };

    case Types.DELETE_TRANSFERENCE_PATRIMONY_SUCCESS:
      return {
        ...state,
        read_transference_patrimony: [
          ...state.read_transference_patrimony.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_TRANSFERENCE_PATRIMONY_SUCCESS:
      return {
        ...state,
        read_transference_patrimony: [
          ...state.read_transference_patrimony,
          action.payload.data,
        ],
      };

    case Types.UPDATE_TRANSFERENCE_PATRIMONY_SUCCESS:
      return {
        ...state,
        read_transference_patrimony: updateItem(
          state.read_transference_patrimony,
          action.payload.data
        ),
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

  readTransfersRequest: (id) => ({
    type: Types.READ_TRANSFERENCE_PATRIMONY_REQUEST,
    payload: {
      id,
    },
  }),

  readTransfersSuccess: (data) => ({
    type: Types.READ_TRANSFERENCE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  createTransferencePatrimonyRequest: (data) => ({
    type: Types.CREATE_TRANSFERENCE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  createTransferencePatrimonySuccess: (data) => ({
    type: Types.CREATE_TRANSFERENCE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  updateTransferencePatrimonyRequest: (data) => ({
    type: Types.UPDATE_TRANSFERENCE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  updateTransferencePatrimonySuccess: (data) => ({
    type: Types.UPDATE_TRANSFERENCE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  deleteTransferencePatrimonyRequest: (id) => ({
    type: Types.DELETE_TRANSFERENCE_PATRIMONY_REQUEST,
    payload: {
      id,
    },
  }),

  deleteTransferencePatrimonySuccess: (id) => ({
    type: Types.DELETE_TRANSFERENCE_PATRIMONY_SUCCESS,
    payload: {
      id,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}
