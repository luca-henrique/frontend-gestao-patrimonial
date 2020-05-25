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
  units_list: { visible: true, data: [], id_institution: 0 },
  create_units: false,
  update_units: { visible: false, data: [] },
});

export default function UNITS(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */

    /** Logica invertida porque gerencia um disabled de um according */
    case Types.SHOW_ACCORDING_UNITS:
      return {
        ...state,
        units_list: { visible: false, id_institution: action.payload.id },
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
      return { ...state, update_units: { visible: true, data: [] } };

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

  /* --> Modal <-- */
};
