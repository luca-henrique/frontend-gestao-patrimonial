import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_ACCORDING_UNITS: "@UNITS/SHOW_ACCORDING_UNITS",
  HIDE_ACCORDING_UNITS: "@UNITS/HIDE_ACCORDING_UNITS",

  SHOW_NEW_MODAL_UNITS: "@UNITS/SHOW_NEW_MODAL_UNITS",
  HIDE_NEW_MODAL_UNITS: "@UNITS/HIDE_NEW_MODAL_UNITS",

  SHOW_UPDATE_MODAL_UNITS: "@UNITS/SHOW_UPDATE_MODAL_UNITS",
  HIDE_UPDATE_MODAL_UNITS: "@UNITS/HIDE_UPDATE_MODAL_UNITS",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_UNITS_REQUEST: "@UNITS/CREATE_UNITS_REQUEST",
  CREATE_UNITS_SUCCESS: "@UNITS/CREATE_UNITS_SUCCESS",

  READ_UNITS_REQUEST: "@UNITS/READ_UNITS_REQUEST",
  READ_UNITS_SUCCESS: "@UNITS/READ_UNITS_SUCCESS",

  UPDATE_UNITS_REQUEST: "@UNITS/UPDATE_UNITS_REQUEST",
  UPDATE_UNITS_SUCCESS: "@UNITS/UPDATE_UNITS_SUCCESS",

  DELETE_UNITS_REQUEST: "@UNITS/DELETE_UNITS_REQUEST",
  DELETE_UNITS_SUCCESS: "@UNITS/DELETE_UNITS_SUCCESS",
};

const INITIAL_STATE = Immutable({
  units_list: { visible: true, id_sector: 0 },

  create_units: false,

  update_units: { visible: false, data: [] },

  units: [],
  loading_units: false,
});

export default function Units(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */

    /** Logica invertida porque gerencia um disabled de um according */
    case Types.SHOW_ACCORDING_UNITS:
      return {
        ...state,
        units_list: { visible: false, id_sector: action.payload.id },
      };

    case Types.HIDE_ACCORDING_UNITS:
      return { ...state, units_list: { visible: true } };

    case Types.SHOW_NEW_MODAL_UNITS:
      return { ...state, create_units: true };

    case Types.HIDE_NEW_MODAL_UNITS:
      return { ...state, create_units: false };

    case Types.SHOW_UPDATE_MODAL_UNITS:
      return {
        ...state,
        update_units: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_UNITS:
      return { ...state, update_units: { visible: false, data: [] } };

    /* CRUD[REQUEST] */

    case Types.READ_UNITS_REQUEST:
      return { ...state, loading_units: true };

    case Types.READ_UNITS_SUCCESS:
      return { ...state, loading_units: false, units: action.payload.data };

    case Types.DELETE_UNITS_SUCCESS:
      return {
        ...state,
        units: [
          ...state.units.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_UNITS_SUCCESS:
      return {
        ...state,
        units: [...state.units, action.payload.data],
      };

    case Types.UPDATE_UNITS_SUCCESS:
      return {
        ...state,
        units: updateItem(state.units, action.payload.data),
      };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showAccordingUnits: (id) => ({
    type: Types.SHOW_ACCORDING_UNITS,
    payload: {
      id,
    },
  }),
  hideAccordingUnits: () => ({
    type: Types.HIDE_ACCORDING_UNITS,
  }),

  showNewUnits: () => ({
    type: Types.SHOW_NEW_MODAL_UNITS,
  }),

  hideNewUnits: () => ({
    type: Types.HIDE_NEW_MODAL_UNITS,
  }),

  showUpdateUnits: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_UNITS,
    payload: {
      data,
    },
  }),

  hideUpdateUnits: () => ({
    type: Types.HIDE_UPDATE_MODAL_UNITS,
  }),

  /* --> Modal <-- */

  readUnitRequest: (id) => ({
    type: Types.READ_UNITS_REQUEST,
    payload: {
      id,
    },
  }),

  readUnitSuccess: (data) => ({
    type: Types.READ_UNITS_SUCCESS,
    payload: {
      data,
    },
  }),

  createUnitRequest: (data) => ({
    type: Types.CREATE_UNITS_REQUEST,
    payload: {
      data,
    },
  }),

  createUnitSuccess: (data) => ({
    type: Types.CREATE_UNITS_SUCCESS,
    payload: {
      data,
    },
  }),

  updateUnitRequest: (data) => ({
    type: Types.UPDATE_UNITS_REQUEST,
    payload: {
      data,
    },
  }),

  updateUnitSuccess: (data) => ({
    type: Types.UPDATE_UNITS_SUCCESS,
    payload: {
      data,
    },
  }),

  deleteUnitRequest: (id) => ({
    type: Types.DELETE_UNITS_REQUEST,
    payload: {
      id,
    },
  }),

  deleteUnitSuccess: (id) => ({
    type: Types.DELETE_UNITS_SUCCESS,
    payload: {
      id,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}
