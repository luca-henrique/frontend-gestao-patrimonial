import Immutable from "seamless-immutable";

export const Types = {
  /* Abrir/fechar modal para duplicar patrimonio  */
  SHOW_MODAL_CREATE_OCCURRENCE_PATRIMONY:
    "@occurrence-patrimony/SHOW_MODAL_CREATE_OCCURRENCE_PATRIMONY",
  HIDE_MODAL_CREATE_OCCURRENCE_PATRIMONY:
    "@occurrence-patrimony/HIDE_MODAL_CREATE_OCCURRENCE_PATRIMONY",

  SHOW_MODAL_UPDATE_OCCURRENCE_PATRIMONY:
    "@occurrence-patrimony/SHOW_MODAL_UPDATE_OCCURRENCE_PATRIMONY",
  HIDE_MODAL_UPDATE_OCCURRENCE_PATRIMONY:
    "@occurrence-patrimony/HIDE_MODAL_UPDATE_OCCURRENCE_PATRIMONY",

  CREATE_OCCURRENCE_PATRIMONY_REQUEST:
    "@occurrence-patrimony/CREATE_OCCURRENCE_PATRIMONY_REQUEST",
  UPDATE_OCCURRENCE_PATRIMONY_REQUEST:
    "@occurrence-patrimony/UPDATE_OCCURRENCE_PATRIMONY_REQUEST",
};

const INITIAL_STATE = Immutable({
  create_patrimony_occurence: { visible: false, id_patrimony: 0 },

  update_patrimony_occurence: {
    visible: false,
    id_occorence: 0,
  },

  create_occurence_patrimony_request: { id_patrimony: 0, occurrence: {} },

  update_occurence_patrimony_request: { id_occurrence: 0, occurrence: {} },
});

export default function lowPatrimony(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_CREATE_OCCURRENCE_PATRIMONY:
      return {
        ...state,
        create_patrimony_occurence: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_CREATE_OCCURRENCE_PATRIMONY:
      return {
        ...state,
        create_patrimony_occurence: { visible: false, id_patrimony: 0 },
      };

    case Types.SHOW_MODAL_UPDATE_OCCURRENCE_PATRIMONY:
      return {
        ...state,
        update_patrimony_occurence: {
          visible: true,
          id_occurrence: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_UPDATE_OCCURRENCE_PATRIMONY:
      return {
        ...state,
        update_patrimony_occurence: { visible: false, id_occurrence: 0 },
      };

    case Types.CREATE_OCCURRENCE_PATRIMONY_REQUEST:
      return {
        ...state,
        create_occurence_patrimony_request: {
          id_patrimony: action.payload.id,
          occurrence: action.payload.occurrence,
        },
      };

    case Types.UPDATE_OCCURRENCE_PATRIMONY_REQUEST:
      return {
        ...state,
        update_occurence_patrimony_request: {
          id_occurrence: action.payload.id,
          occurrence: action.payload.occurrence,
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalCreateOccurrencePatrimony: (id) => ({
    type: Types.SHOW_MODAL_CREATE_OCCURRENCE_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalCreateOccurrencePatrimony: () => ({
    type: Types.HIDE_MODAL_CREATE_OCCURRENCE_PATRIMONY,
  }),

  showModalUpdateOccurrencePatrimony: (id) => ({
    type: Types.SHOW_MODAL_UPDATE_OCCURRENCE_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalUpdateOccurrencePatrimony: () => ({
    type: Types.HIDE_MODAL_UPDATE_OCCURRENCE_PATRIMONY,
  }),

  createOccurrencePatrimonyRequest: (id, occurrence) => ({
    type: Types.CREATE_OCCURRENCE_PATRIMONY_REQUEST,
    payload: {
      id,
      occurrence,
    },
  }),

  updateOccurrencePatrimonyRequest: (id, occurrence) => ({
    type: Types.UPDATE_OCCURRENCE_PATRIMONY_REQUEST,
    payload: {
      id,
      occurrence,
    },
  }),
};
