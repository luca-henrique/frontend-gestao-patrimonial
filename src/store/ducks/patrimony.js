import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE] <- */
  SHOW_PATRIMONY: "@patrimony/SHOW_PATRIMONY",
  HIDE_PATRIMONY: "@patrimony/HIDE_PATRIMONY",

  SHOW_NEW_PATRIMONY: "@patrimony/SHOW_NEW_PATRIMONY",
  HIDE_NEW_PATRIMONY: "@patrimony/HIDE_NEW_PATRIMONY",

  SHOW_UPDATE_PATRIMONY: "@patrimony/SHOW_UPDATE_MODAL_ACCOUNT",
  HIDE_UPDATE_PATRIMONY: "@patrimony/HIDE_UPDATE_MODAL_ACCOUNT",

  SHOW_DUPLICATE_PATRIMONY: "@patrimony/SHOW_DUPLICATE_PATRIMONY",
  HIDE_DUPLICATE_PATRIMONY: "@patrimony/HIDE_DUPLICATE_PATRIMONY",

  /* -> REQUISIÇÔES [ CRUD ] <- */
  CREATE_PATRIMONY_REQUEST: "@patrimony/CREATE_PATRIMONY_REQUEST",
  CREATE_PATRIMONY_SUCCESS: "@patrimony/CREATE_PATRIMONY_SUCCESS",

  READ_PATRIMONY_REQUEST: "@patrimony/READ_PATRIMONY_REQUEST",
  READ_PATRIMONY_SUCCESS: "@patrimony/READ_PATRIMONY_SUCCESS",

  UPDATE_PATRIMONY_REQUEST: "@patrimony/UPDATE_PATRIMONY_REQUEST",
  UPDATE_PATRIMONY_SUCCESS: "@patrimony/UPDATE_PATRIMONY_SUCCESS",

  DELETE_PATRIMONY_REQUEST: "@patrimony/DELETE_PATRIMONY_REQUEST",
  DELETE_PATRIMONY_SUCCESS: "@patrimony/DELETE_PATRIMONY_SUCCESS",

  DUPLICATE_PATRIMONY_REQUEST: "@patrimony/DUPLICATE_PATRIMONY_REQUEST",
  DUPLICATE_PATRIMONY_SUCCESS: "@patrimony/DUPLICATE_PATRIMONY_SUCCESS",

  ENABLE_PATRIMONY_EDIT: "@patrimony/ENABLE_PATRIMONY_EDIT",
  DISABLE_PATRIMONY_EDIT: "@patrimony/DISABLE_PATRIMONY_EDIT",

  CHANGER_LOCALIZATION_PATRIMONY: "patrimony/CHANGER_LOCALIZATION_PATRIMONY",
};

const INITIAL_STATE = Immutable({
  show_patrimony: {},

  patrimony_duplicate: { visible: false, id: 0 },

  create_low_item: false,
  update_low_item: { visible: false, data: [] },

  patrimonies: [],
  loading_patrimony: false,

  edit_patrimony_visible: true,
});

export default function Patrimony(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.DISABLE_PATRIMONY_EDIT:
      return { ...state, edit_patrimony_visible: true };

    case Types.ENABLE_PATRIMONY_EDIT:
      return { ...state, edit_patrimony_visible: false };

    case Types.SHOW_PATRIMONY:
      return { ...state, show_patrimony: action.payload.item };
    case Types.HIDE_PATRIMONY:
      return { ...state, show_patrimony: {} };

    case Types.SHOW_DUPLICATE_PATRIMONY:
      return {
        ...state,
        patrimony_duplicate: { visible: true, id: action.payload.id },
      };
    case Types.HIDE_DUPLICATE_PATRIMONY:
      return { ...state, patrimony_duplicate: { visible: false, id: 0 } };

    case Types.READ_PATRIMONY_REQUEST:
      return { ...state, loading_patrimony: true };

    case Types.READ_PATRIMONY_SUCCESS:
      return {
        ...state,
        loading_patrimony: false,
        patrimonies: action.payload.data,
      };

    case Types.CREATE_PATRIMONY_SUCCESS:
      return {
        ...state,
        patrimonies: [...state.patrimonies, action.payload.data],
      };

    case Types.UPDATE_PATRIMONY_SUCCESS:
      return {
        ...state,
        patrimonies: updateItem(state.patrimonies, action.payload.data),
      };

    case Types.DELETE_PATRIMONY_SUCCESS:
      return {
        ...state,
        patrimonies: [
          ...state.patrimonies.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CHANGER_LOCALIZATION_PATRIMONY:
      return {
        ...state,
        show_patrimony: updateTransference(
          state.show_patrimony,
          action.payload.data
        ),
      };

    case Types.DUPLICATE_PATRIMONY_SUCCESS:
      return {
        ...state,
        patrimonies: duplicatePatrimony(state.patrimonies, action.payload.data),
      };

    default:
      return state;
  }
}

export const Creators = {
  showPatrimony: (item) => ({
    type: Types.SHOW_PATRIMONY,
    payload: {
      item,
    },
  }),

  hidePatrimony: () => ({
    type: Types.HIDE_PATRIMONY,
  }),

  readPatrimonyRequest: (data) => ({
    type: Types.READ_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  showModalDuplicatePatrimony: (id) => ({
    type: Types.SHOW_DUPLICATE_PATRIMONY,
    payload: {
      id,
    },
  }),

  hideModalDuplicatePatrimony: () => ({
    type: Types.HIDE_DUPLICATE_PATRIMONY,
  }),

  readPatrimonySuccess: (data) => ({
    type: Types.READ_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  createPatrimonyRequest: (data) => ({
    type: Types.CREATE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  createPatrimonySuccess: (data) => ({
    type: Types.CREATE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  updatePatrimonyRequest: (data) => ({
    type: Types.UPDATE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  updatePatrimonySuccess: (data) => ({
    type: Types.UPDATE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  deletePatrimonyRequest: (id) => ({
    type: Types.DELETE_PATRIMONY_REQUEST,
    payload: {
      id,
    },
  }),

  deletePatrimonySuccess: (id) => ({
    type: Types.DELETE_PATRIMONY_SUCCESS,
    payload: {
      id,
    },
  }),

  duplicatePatrimonyRequest: (data) => ({
    type: Types.DUPLICATE_PATRIMONY_REQUEST,
    payload: {
      data,
    },
  }),

  duplicatePatrimonySuccess: (data) => ({
    type: Types.DUPLICATE_PATRIMONY_SUCCESS,
    payload: {
      data,
    },
  }),

  enablePatrimonyEdit: () => ({
    type: Types.ENABLE_PATRIMONY_EDIT,
  }),

  disablePatrimonyEdit: () => ({
    type: Types.DISABLE_PATRIMONY_EDIT,
  }),

  changerTransferencePatrimony: (data) => ({
    type: Types.CHANGER_LOCALIZATION_PATRIMONY,
    payload: {
      data,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}

function updateTransference(state, data) {
  state.locale_item_id = data.new_locale_item_id;
  state.sector_id = data.new_sector_id;
  state.unit_id = data.new_unit_id;

  return { ...state };
}

function duplicatePatrimony(oldState, duplicates) {
  return oldState.concat(duplicates);
}
