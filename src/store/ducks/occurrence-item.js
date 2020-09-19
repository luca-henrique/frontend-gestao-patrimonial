import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_NEW_MODAL_OCCURRENCE_ITEM:
    "@occurrenceItem/SHOW_NEW_MODAL_OCCURRENCE_ITEM",
  HIDE_NEW_MODAL_OCCURRENCE_ITEM:
    "@occurrenceItem/HIDE_NEW_MODAL_OCCURRENCE_ITEM",

  SHOW_UPDATE_MODAL_OCCURRENCE_ITEM:
    "@occurrenceItem/SHOW_UPDATE_MODAL_OCCURRENCE_ITEM",
  HIDE_UPDATE_MODAL_OCCURRENCE_ITEM:
    "@occurrenceItem/HIDE_UPDATE_MODAL_OCCURRENCE_ITEM",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_OCCURRENCE_ITEM_REQUEST:
    "@occurrenceItem/CREATE_OCCURRENCE_ITEM_REQUEST",
  CREATE_OCCURRENCE_ITEM_SUCCESS:
    "@occurrenceItem/CREATE_OCCURRENCE_ITEM_SUCCESS",

  READ_OCCURRENCE_ITEM_REQUEST: "@occurrenceItem/READ_OCCURRENCE_ITEM_REQUEST",
  READ_OCCURRENCE_ITEM_SUCCESS: "@occurrenceItem/READ_OCCURRENCE_ITEM_SUCCESS",

  UPDATE_OCCURRENCE_ITEM_REQUEST:
    "@occurrenceItem/UPDATE_OCCURRENCE_ITEM_REQUEST",
  UPDATE_OCCURRENCE_ITEM_SUCCESS:
    "@occurrenceItem/UPDATE_OCCURRENCE_ITEM_SUCCESS",

  DELETE_OCCURRENCE_ITEM_REQUEST:
    "@occurrenceItem/DELETE_OCCURRENCE_ITEM_REQUEST",
  DELETE_OCCURRENCE_ITEM_SUCCESS:
    "@occurrenceItem/DELETE_OCCURRENCE_ITEM_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_occurrence_item: false,
  update_occurrence_item: { visible: false, data: [] },

  occurrence_items: [],
  loading_occurrence_items: false,
});

export default function occurrenceItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */
    case Types.SHOW_NEW_MODAL_OCCURRENCE_ITEM:
      return { ...state, create_occurrence_item: true };

    case Types.HIDE_NEW_MODAL_OCCURRENCE_ITEM:
      return { ...state, create_occurrence_item: false };

    case Types.SHOW_UPDATE_MODAL_OCCURRENCE_ITEM:
      return {
        ...state,
        update_occurrence_item: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_OCCURRENCE_ITEM:
      return { ...state, update_occurrence_item: { visible: false, data: [] } };

    case Types.READ_OCCURRENCE_ITEM_REQUEST:
      return { ...state, loading_occurrence_items: true };

    case Types.READ_OCCURRENCE_ITEM_SUCCESS:
      return {
        ...state,
        occurrence_items: action.payload.data,
        loading_occurrence_items: false,
      };

    case Types.DELETE_OCCURRENCE_ITEM_SUCCESS:
      return {
        ...state,
        occurrence_items: [
          ...state.occurrence_items.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_OCCURRENCE_ITEM_SUCCESS:
      return {
        ...state,
        occurrence_items: [...state.occurrence_items, action.payload.data],
      };

    case Types.UPDATE_OCCURRENCE_ITEM_SUCCESS:
      return {
        ...state,
        occurrence_items: updateItem(
          state.occurrence_items,
          action.payload.data
        ),
      };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showNewOccurrenceItem: () => ({
    type: Types.SHOW_NEW_MODAL_OCCURRENCE_ITEM,
  }),
  hideNewOccurrenceItem: () => ({
    type: Types.HIDE_NEW_MODAL_OCCURRENCE_ITEM,
  }),
  showUpdateOccurrenceItem: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_OCCURRENCE_ITEM,
    payload: {
      data,
    },
  }),
  hideUpdateOccurrenceItem: () => ({
    type: Types.HIDE_UPDATE_MODAL_OCCURRENCE_ITEM,
  }),
  /* --> Modal <-- */

  readTesteOccurrenceItemRequest: () => ({
    type: Types.READ_OCCURRENCE_ITEM_REQUEST,
  }),

  readOccurrenceItemSuccess: (data) => ({
    type: Types.READ_OCCURRENCE_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  createOccurrenceItemRequest: (data) => ({
    type: Types.CREATE_OCCURRENCE_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  createOccurrenceItemSuccess: (data) => ({
    type: Types.CREATE_OCCURRENCE_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  updateOccurrenceItemRequest: (data) => ({
    type: Types.UPDATE_OCCURRENCE_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  updateOccurrenceItemSuccess: (data) => ({
    type: Types.UPDATE_OCCURRENCE_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  deleteOccurrenceItemRequest: (id) => ({
    type: Types.DELETE_OCCURRENCE_ITEM_REQUEST,
    payload: {
      id,
    },
  }),

  deleteOccurrenceItemSuccess: (id) => ({
    type: Types.DELETE_OCCURRENCE_ITEM_SUCCESS,
    payload: {
      id,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}
