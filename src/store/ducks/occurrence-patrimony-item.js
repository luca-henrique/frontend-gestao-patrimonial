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

  CREATE_OCCURRENCE_PATRIMONY_SUCCESS:
    "@occurrence-patrimony/CREATE_OCCURRENCE_PATRIMONY_SUCCESS",

  READ_OCCURRENCE_PATRIMONY_REQUEST:
    "@occurrence-patrimony/READ_OCCURRENCE_PATRIMONY_REQUEST",
  READ_OCCURRENCE_PATRIMONY_SUCCESS:
    "@occurrence-patrimony/READ_OCCURRENCE_PATRIMONY_SUCCESS",

  UPDATE_OCCURRENCE_PATRIMONY_REQUEST:
    "@occurrence-patrimony/UPDATE_OCCURRENCE_PATRIMONY_REQUEST",

  UPDATE_OCCURRENCE_PATRIMONY_SUCCESS:
    "@occurrence-patrimony/UPDATE_OCCURRENCE_PATRIMONY_SUCCESS",
};

const INITIAL_STATE = Immutable({
  exist_occurrence_patrimony: false,

  create_occurrence_patrimony: { visible: false, id_patrimony: 0 },

  update_occurrence_patrimony: { visible: false, id_occurrence: 0 },

  read_occurrence_patrimony: {},
});

export default function occurrencePatrimony(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_CREATE_OCCURRENCE_PATRIMONY:
      return {
        ...state,
        create_occurrence_patrimony: {
          visible: true,
          id_patrimony: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_CREATE_OCCURRENCE_PATRIMONY:
      return {
        ...state,
        create_occurrence_patrimony: {
          visible: false,
          id_patrimony: 0,
        },
      };

    case Types.SHOW_MODAL_UPDATE_OCCURRENCE_PATRIMONY:
      return {
        ...state,
        update_occurrence_patrimony: {
          visible: true,
          id_occurrence: action.payload.id,
        },
      };
    case Types.HIDE_MODAL_UPDATE_OCCURRENCE_PATRIMONY:
      return {
        ...state,
        update_occurrence_patrimony: {
          visible: false,
          id_occurrence: 0,
        },
      };

    case Types.READ_OCCURRENCE_PATRIMONY_REQUEST:
      return {
        ...state,
        read_occurrence_patrimony: {
          id_patrimony: action.payload.id,
        },
      };

    case Types.READ_OCCURRENCE_PATRIMONY_SUCCESS:
      return {
        ...state,
        read_occurrence_patrimony: action.payload.data,
        exist_occurrence_patrimony: action.payload.exist,
      };

    case Types.CREATE_OCCURRENCE_PATRIMONY_SUCCESS:
      return {
        ...state,
        read_occurrence_patrimony: action.payload.data,
        exist_occurrence_patrimony: true,
      };

    case Types.UPDATE_OCCURRENCE_PATRIMONY_SUCCESS:
      return {
        ...state,
        read_occurrence_patrimony: action.payload.data,
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

  createOccurrencePatrimonyRequest: (occurrence) => ({
    type: Types.CREATE_OCCURRENCE_PATRIMONY_REQUEST,
    payload: {
      occurrence,
    },
  }),

  createOccurrencePatrimonySuccess: (data) => ({
    type: Types.CREATE_OCCURRENCE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  updateOccurrencePatrimonyRequest: (data) => ({
    type: Types.UPDATE_OCCURRENCE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  updateOccurrencePatrimonySuccess: (data) => ({
    type: Types.UPDATE_OCCURRENCE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  readOccurrencePatrimonyRequest: (id) => ({
    type: Types.READ_OCCURRENCE_PATRIMONY_REQUEST,
    payload: {
      id,
    },
  }),

  readOccurrencePatrimonySuccess: (data, exist) => ({
    type: Types.READ_OCCURRENCE_PATRIMONY_SUCCESS,
    payload: {
      data,
      exist,
    },
  }),
};
