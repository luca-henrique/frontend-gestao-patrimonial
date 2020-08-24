import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_ACCORDING_SECTORS: "@sector/SHOW_ACCORDING_SECTORS",
  HIDE_ACCORDING_SECTORS: "@sector/HIDE_ACCORDING_SECTORS",

  SHOW_NEW_MODAL_SECTOR: "@sector/SHOW_NEW_MODAL_SECTOR",
  HIDE_NEW_MODAL_SECTOR: "@sector/HIDE_NEW_MODAL_SECTOR",

  SHOW_UPDATE_MODAL_SECTOR: "@sector/SHOW_UPDATE_MODAL_SECTOR",
  HIDE_UPDATE_MODAL_SECTOR: "@sector/HIDE_UPDATE_MODAL_SECTOR",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_SECTOR_REQUEST: "@sector/CREATE_SECTOR_REQUEST",
  CREATE_SECTOR_SUCCESS: "@sector/CREATE_SECTOR_SUCCESS",

  READ_SECTORS_REQUEST: "@sector/READ_SECTORS_REQUEST",
  READ_SECTORS_SUCCESS: "@sector/READ_SECTORS_SUCCESS",

  UPDATE_SECTOR_REQUEST: "@sector/UPDATE_SECTOR_REQUEST",
  UPDATE_SECTOR_SUCCESS: "@sector/UPDATE_SECTOR_SUCCESS",

  DELETE_SECTOR_REQUEST: "@sector/DELETE_SECTOR_REQUEST",
  DELETE_SECTOR_SUCCESS: "@sector/DELETE_SECTOR_SUCCESS",
};

const INITIAL_STATE = Immutable({
  sectors_list: { visible: true, data: [], id_institution: 0 },
  create_sector: false,
  update_sector: { visible: false, data: [] },

  sector: [],
  loading_sectors: false,
});

export default function Sector(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */

    /** Logica invertida porque gerencia um disabled de um according */
    case Types.SHOW_ACCORDING_SECTORS:
      return {
        ...state,
        sectors_list: { visible: false, id_institution: action.payload.id },
      };

    case Types.HIDE_ACCORDING_SECTORS:
      return { ...state, sectors_list: { visible: true } };

    case Types.SHOW_NEW_MODAL_SECTOR:
      return { ...state, create_sector: true };

    case Types.HIDE_NEW_MODAL_SECTOR:
      return { ...state, create_sector: false };

    case Types.SHOW_UPDATE_MODAL_SECTOR:
      return {
        ...state,
        update_sector: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_SECTOR:
      return { ...state, update_sector: { visible: false, data: [] } };

    case Types.READ_SECTORS_REQUEST:
      return { ...state, loading_sectors: true };

    case Types.READ_SECTORS_SUCCESS:
      return { ...state, loading_sectors: false, sector: action.payload.data };

    case Types.DELETE_SECTOR_SUCCESS:
      return {
        ...state,
        sector: [
          ...state.sector.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_SECTOR_SUCCESS:
      return {
        ...state,
        sector: [...state.sector, action.payload.data],
      };

    case Types.UPDATE_SECTOR_SUCCESS:
      return {
        ...state,
        sector: updateItem(state.sector, action.payload.data),
      };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showAccordingSectors: (id) => ({
    type: Types.SHOW_ACCORDING_SECTORS,
    payload: {
      id,
    },
  }),
  hideAccordingSectors: () => ({
    type: Types.HIDE_ACCORDING_SECTORS,
  }),

  showNewSector: () => ({
    type: Types.SHOW_NEW_MODAL_SECTOR,
  }),

  hideNewSector: () => ({
    type: Types.HIDE_NEW_MODAL_SECTOR,
  }),

  showUpdateSector: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_SECTOR,
    payload: {
      data,
    },
  }),

  hideUpdateSector: () => ({
    type: Types.HIDE_UPDATE_MODAL_SECTOR,
  }),

  /* --> Modal <-- */

  readSectorsRequest: (id) => ({
    type: Types.READ_SECTORS_REQUEST,
    payload: {
      id,
    },
  }),

  readSectorsSuccess: (data) => ({
    type: Types.READ_SECTORS_SUCCESS,
    payload: {
      data,
    },
  }),

  createSectorRequest: (data) => ({
    type: Types.CREATE_SECTOR_REQUEST,
    payload: {
      data,
    },
  }),

  createSectorSuccess: (data) => ({
    type: Types.CREATE_SECTOR_SUCCESS,
    payload: {
      data,
    },
  }),

  updateSectorRequest: (data) => ({
    type: Types.UPDATE_SECTOR_REQUEST,
    payload: {
      data,
    },
  }),

  updateSectorSuccess: (data) => ({
    type: Types.UPDATE_SECTOR_SUCCESS,
    payload: {
      data,
    },
  }),

  deleteSectorRequest: (id) => ({
    type: Types.DELETE_SECTOR_REQUEST,
    payload: {
      id,
    },
  }),

  deleteSectorSuccess: (id) => ({
    type: Types.DELETE_SECTOR_SUCCESS,
    payload: {
      id,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}
