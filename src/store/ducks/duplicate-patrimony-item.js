import Immutable from "seamless-immutable";

export const Types = {
  /* Abrir/fechar modal para duplicar patrimonio  */
  SHOW_MODAL_DUPLICATE_PATRIMONY:
    "@duplicate-patrimony/SHOW_MODAL_DUPLICATE_PATRIMONY",
  HIDE_MODAL_DUPLICATE_PATRIMONY:
    "@duplicate-patrimony/HIDE_MODAL_DUPLICATE_PATRIMONY",

  DUPLICATE_PATRIMONY_REQUEST:
    "@duplicate-patrimony/DUPLICATE_PATRIMONY_REQUEST",
};

const INITIAL_STATE = Immutable({
  show_patrimony_duplicate: { visible: false, id_patrimony: 0 },

  duplicate_patrimony_request: { id_patrimony: 0, tipping: 0 },
});

export default function PatrimonyDelete(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_DUPLICATE_PATRIMONY:
      return {
        ...state,
        show_patrimony_duplicate: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_DUPLICATE_PATRIMONY:
      return {
        ...state,
        show_patrimony_duplicate: { visible: false, id_patrimony: 0 },
      };

    case Types.DUPLICATE_PATRIMONY_REQUEST:
      return {
        ...state,
        duplicate_patrimony_request: {
          id_patrimony: action.payload.id,
          newTipping: action.payload.newTipping,
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalDuplicatePatrimony: (id) => ({
    type: Types.SHOW_MODAL_DUPLICATE_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalDuplicatePatrimony: () => ({
    type: Types.HIDE_MODAL_DUPLICATE_PATRIMONY,
  }),

  duplicatePatrimonyRequest: (id, newTipping) => ({
    type: Types.DUPLICATE_PATRIMONY_REQUEST,
    payload: {
      id,
      newTipping,
    },
  }),
};
