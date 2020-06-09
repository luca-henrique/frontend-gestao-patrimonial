import Immutable from "seamless-immutable";

export const Types = {
  /* Abrir/fechar modal para duplicar patrimonio  */
  SHOW_MODAL_LOW_PATRIMONY: "@low-patrimony/SHOW_MODAL_LOW_PATRIMONY",
  HIDE_MODAL_LOW_PATRIMONY: "@low-patrimony/HIDE_MODAL_LOW_PATRIMONY",

  LOW_PATRIMONY_REQUEST: "@low-patrimony/LOW_PATRIMONY_REQUEST",
};

const INITIAL_STATE = Immutable({
  show_patrimony_low: { visible: false, id_patrimony: 0 },

  low_patrimony_request: { id_patrimony: 0 },
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

    case Types.LOW_PATRIMONY_REQUEST:
      return {
        ...state,
        duplicate_patrimony_request: {
          id_patrimony: action.payload.id,
        },
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

  lowPatrimonyRequest: (id) => ({
    type: Types.LOW_PATRIMONY_REQUEST,
    payload: {
      id,
    },
  }),
};
