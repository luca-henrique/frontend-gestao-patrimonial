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

  CREATE_LOW_PATRIMONY_REQUEST: "@low-patrimony/CREATE_LOW_PATRIMONY_REQUEST",
  DELETE_LOW_PATRIMONY_REQUEST: "@low-patrimony/UPDATE_LOW_PATRIMONY_REQUEST",
};

const INITIAL_STATE = Immutable({
  show_create_modal_low_patrimony: { visible: false, id_patrimony: 0 },

  show_remove_modal_low_patrimony: { visible: false, id_low: 0 },

  read_low_patrimony_request: { id_patrimony: 0 },

  read_low_patrimony_success: { data: {}, exist: false },

  create_low_patrimony_request: { low: {} },

  update_low_patrimony_request: { id_low: 0 },
});

export default function lowPatrimony(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_CREATE_LOW_PATRIMONY:
      return {
        ...state,
        show_create_modal_low_patrimony: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_CREATE_LOW_PATRIMONY:
      return {
        ...state,
        show_create_modal_low_patrimony: { visible: false, id_patrimony: 0 },
      };

    case Types.SHOW_MODAL_REMOVE_LOW_PATRIMONY:
      return {
        ...state,
        show_remove_modal_low_patrimony: {
          visible: true,
          id_low: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_REMOVE_LOW_PATRIMONY:
      return {
        ...state,
        show_remove_modal_low_patrimony: { visible: false, id_low: 0 },
      };

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

  showModalRemoveLowPatrimony: (id) => ({
    type: Types.SHOW_MODAL_REMOVE_LOW_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalRemoveLowPatrimony: () => ({
    type: Types.HIDE_MODAL_REMOVE_LOW_PATRIMONY,
  }),
};
