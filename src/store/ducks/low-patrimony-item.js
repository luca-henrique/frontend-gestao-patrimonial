import Immutable from "seamless-immutable";

export const Types = {
  /* Abrir/fechar modal para duplicar patrimonio  */
  SHOW_MODAL_CREATE_LOW_PATRIMONY:
    "@low-patrimony/SHOW_MODAL_CREATE_LOW_PATRIMONY",
  HIDE_MODAL_CREATE_LOW_PATRIMONY:
    "@low-patrimony/HIDE_MODAL_CREATE_LOW_PATRIMONY",

  SHOW_MODAL_UPDATE_LOW_PATRIMONY:
    "@low-patrimony/SHOW_MODAL_UPDATE_LOW_PATRIMONY",
  HIDE_MODAL_UPDATE_LOW_PATRIMONY:
    "@low-patrimony/HIDE_MODAL_UPDATE_LOW_PATRIMONY",

  SHOW_MODAL_REMOVE_LOW_PATRIMONY:
    "@low-patrimony/SHOW_MODAL_REMOVE_LOW_PATRIMONY",
  HIDE_MODAL_REMOVE_LOW_PATRIMONY:
    "@low-patrimony/HIDE_MODAL_REMOVE_LOW_PATRIMONY",

  READ_LOW_PATRIMONY_REQUEST: "@low-patrimony/READ_LOW_PATRIMONY_REQUEST",
  READ_LOW_PATRIMONY_SUCCESS: "@low-patrimony/READ_LOW_PATRIMONY_SUCCESS",

  CREATE_LOW_PATRIMONY_REQUEST: "@low-patrimony/CREATE_LOW_PATRIMONY_REQUEST",
  CREATE_LOW_PATRIMONY_SUCCESS: "@low-patrimony/CREATE_LOW_PATRIMONY_SUCCESS",

  UPDATE_LOW_PATRIMONY_REQUEST: "@low-patrimony/UPDATE_LOW_PATRIMONY_REQUEST",
  UPDATE_LOW_PATRIMONY_SUCCESS: "@low-patrimony/UPDATE_LOW_PATRIMONY_SUCCESS",

  DELETE_LOW_PATRIMONY_REQUEST: "@low-patrimony/UPDATE_LOW_PATRIMONY_REQUEST",
  DELETE_LOW_PATRIMONY_SUCCESS: "@low-patrimony/UPDATE_LOW_PATRIMONY_SUCCESS",

  EXIST_LOW_PATRIMONY: "@low-patrimony/EXIST_LOW_PATRIMONY",
  NOT_EXIST_LOW_PATRIMONY: "@low-patrimony/NOT_EXIST_LOW_PATRIMONY",
};

const INITIAL_STATE = Immutable({
  low_item_patrimony_exist: false,

  show_create_low_patrimony: { visible: false, id_patrimony: 0 },

  update_low_patrimony: { visible: false, low_id: 0 },

  low_item_patrimony: {},

  loading_low_item_patrimony: false,
});

export default function lowPatrimony(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_CREATE_LOW_PATRIMONY:
      return {
        ...state,
        show_create_low_patrimony: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };

    case Types.HIDE_MODAL_CREATE_LOW_PATRIMONY:
      return {
        ...state,
        show_create_low_patrimony: { visible: false, id_patrimony: 0 },
      };

    case Types.SHOW_MODAL_UPDATE_LOW_PATRIMONY:
      return {
        ...state,
        update_low_patrimony: { visible: true, low_id: action.payload.id },
      };

    case Types.HIDE_MODAL_UPDATE_LOW_PATRIMONY:
      return {
        ...state,
        update_low_patrimony: { visible: false, low_id: 0 },
      };

    case Types.CREATE_LOW_PATRIMONY_SUCCESS: {
      return {
        ...state,
        low_item_patrimony_exist: true,
        low_item_patrimony: action.payload.low,
      };
    }

    case Types.READ_LOW_PATRIMONY_SUCCESS: {
      return {
        ...state,
        low_item_patrimony: action.payload.low,
      };
    }

    case Types.NOT_EXIST_LOW_PATRIMONY: {
      return {
        ...state,
        low_item_patrimony_exist: false,
      };
    }

    case Types.EXIST_LOW_PATRIMONY: {
      return {
        ...state,
        low_item_patrimony_exist: true,
      };
    }

    default:
      return state;
  }
}

export const Creators = {
  showModalCreateLowPatrimony: (id) => ({
    type: Types.SHOW_MODAL_CREATE_LOW_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalCreateLowPatrimony: () => ({
    type: Types.HIDE_MODAL_CREATE_LOW_PATRIMONY,
  }),

  showModalUpdateLowPatrimony: (id) => ({
    type: Types.SHOW_MODAL_UPDATE_LOW_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalUpdateLowPatrimony: () => ({
    type: Types.HIDE_MODAL_UPDATE_LOW_PATRIMONY,
  }),

  readLowPatrimonyRequest: (id) => ({
    type: Types.READ_LOW_PATRIMONY_REQUEST,
    payload: {
      id,
    },
  }),

  readLowPatrimonySuccess: (low) => ({
    type: Types.READ_LOW_PATRIMONY_SUCCESS,
    payload: {
      low,
    },
  }),

  createLowPatrimonyRequest: (low) => ({
    type: Types.CREATE_LOW_PATRIMONY_REQUEST,
    payload: {
      low,
    },
  }),

  createLowPatrimonySuccess: (low) => ({
    type: Types.CREATE_LOW_PATRIMONY_SUCCESS,
    payload: {
      low,
    },
  }),

  updateLowPatrimonyRequest: (low) => ({
    type: Types.UPDATE_LOW_PATRIMONY_REQUEST,
    payload: {
      low,
    },
  }),

  updateLowPatrimonySuccess: (low) => ({
    type: Types.UPDATE_LOW_PATRIMONY_SUCCESS,
    payload: {
      low,
    },
  }),

  lowPatrimonyExist: () => ({
    type: Types.EXIST_LOW_PATRIMONY,
  }),

  lowPatrimonyNotExist: () => ({
    type: Types.NOT_EXIST_LOW_PATRIMONY,
  }),
};
