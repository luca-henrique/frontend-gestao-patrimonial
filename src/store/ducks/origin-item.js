import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_NEW_MODAL_ORIGIN_ITEM: "@originItem/SHOW_NEW_MODAL_ORIGIN_ITEM",
  HIDE_NEW_MODAL_ORIGIN_ITEM: "@originItem/HIDE_NEW_MODAL_ORIGIN_ITEM",

  SHOW_UPDATE_MODAL_ORIGIN_ITEM: "@originItem/SHOW_UPDATE_MODAL_ORIGIN_ITEM",
  HIDE_UPDATE_MODAL_ORIGIN_ITEM: "@originItem/HIDE_UPDATE_MODAL_ORIGIN_ITEM",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_ORIGIN_ITEM_REQUEST: "@loriginItem/CREATE_ORIGIN_ITEM_REQUEST",
  CREATE_ORIGIN_ITEM_SUCCESS: "@originItem/CREATE_ORIGIN_ITEM_SUCCESS",

  READ_ORIGIN_ITEM_REQUEST: "@originItem/READ_ORIGIN_ITEM_REQUEST",
  READ_ORIGIN_ITEM_SUCCESS: "@originItem/READ_ORIGIN_ITEM_SUCCESS",

  UPDATE_ORIGIN_ITEM_REQUEST: "@originItem/UPDATE_ORIGIN_ITEM_REQUEST",
  UPDATE_ORIGIN_ITEM_SUCCESS: "@originItem/UPDATE_ORIGIN_ITEM_SUCCESS",

  DELETE_ORIGIN_ITEM_REQUEST: "@originItem/DELETE_ORIGIN_ITEM_REQUEST",
  DELETE_ORIGIN_ITEM_SUCCESS: "@originItem/DELETE_ORIGIN_ITEM_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_origin_item: false,
  update_origin_item: { visible: false, data: [] },

  origin_items: [],
  loading_origin_items: false,
});

export default function OriginItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_MODAL_ORIGIN_ITEM:
      return { ...state, create_origin_item: true };

    case Types.HIDE_NEW_MODAL_ORIGIN_ITEM:
      return { ...state, create_origin_item: false };

    case Types.SHOW_UPDATE_MODAL_ORIGIN_ITEM:
      return {
        ...state,
        update_origin_item: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_ORIGIN_ITEM:
      return { ...state, update_origin_item: { visible: false, data: [] } };

    case Types.READ_ORIGIN_ITEM_REQUEST:
      return { ...state, loading_origin_items: true };

    case Types.READ_ORIGIN_ITEM_SUCCESS:
      return {
        ...state,
        origin_items: action.payload.data,
        loading_origin_items: false,
      };

    case Types.DELETE_ORIGIN_ITEM_SUCCESS:
      return {
        ...state,
        origin_items: [
          ...state.origin_items.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_ORIGIN_ITEM_SUCCESS:
      return {
        ...state,
        origin_items: [...state.origin_items, action.payload.data],
      };

    case Types.UPDATE_ORIGIN_ITEM_SUCCESS:
      return {
        ...state,
        origin_items: updateItem(state.origin_items, action.payload.data),
      };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showNewOriginItem: () => ({
    type: Types.SHOW_NEW_MODAL_ORIGIN_ITEM,
  }),
  hideNewOriginItem: () => ({
    type: Types.HIDE_NEW_MODAL_ORIGIN_ITEM,
  }),
  showUpdateOriginItem: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_ORIGIN_ITEM,
    payload: {
      data,
    },
  }),
  hideUpdateOriginItem: () => ({
    type: Types.HIDE_UPDATE_MODAL_ORIGIN_ITEM,
  }),
  /* --> Modal <-- */

  readOriginItemRequest: () => ({
    type: Types.READ_ORIGIN_ITEM_REQUEST,
  }),

  readOriginItemSuccess: (data) => ({
    type: Types.READ_ORIGIN_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  createOriginItemRequest: (data) => ({
    type: Types.CREATE_ORIGIN_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  createOriginItemSuccess: (data) => ({
    type: Types.CREATE_ORIGIN_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  updateOriginItemRequest: (data) => ({
    type: Types.UPDATE_ORIGIN_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  updateOriginItemSuccess: (data) => ({
    type: Types.UPDATE_ORIGIN_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  deleteOriginItemRequest: (id) => ({
    type: Types.DELETE_ORIGIN_ITEM_REQUEST,
    payload: {
      id,
    },
  }),

  deleteOriginItemSuccess: (id) => ({
    type: Types.DELETE_ORIGIN_ITEM_SUCCESS,
    payload: {
      id,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}
