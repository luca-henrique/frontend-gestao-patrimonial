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

  CREATE_LOW_PATRIMONY_REQUEST: "@low-patrimony/CREATE_LOW_PATRIMONY_REQUEST",
  UPDATE_LOW_PATRIMONY_REQUEST: "@low-patrimony/UPDATE_LOW_PATRIMONY_REQUEST",
};

const INITIAL_STATE = Immutable({
  show_create_modal_low_patrimony: { visible: false, id_patrimony: 0 },

  show_update_modal_low_patrimony: { visible: false, low: {} },

  read_low_patrimony_request: { id_patrimony: 0 },

  read_low_patrimony_success: { data: {} },

  create_low_patrimony_request: { low: {} },

  update_low_patrimony_request: { id_low: 0 },
});

export default function lowPatrimony(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_LOW_PATRIMONY:
      return {
        ...state,
        show_patrimony_low: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_LOW_PATRIMONY:
      return {
        ...state,
        low_patrimony_request: { visible: false, id_patrimony: 0 },
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalLowPatrimony: (id) => ({
    type: Types.SHOW_MODAL_LOW_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalLowPatrimony: () => ({
    type: Types.HIDE_MODAL_LOW_PATRIMONY,
  }),
};
