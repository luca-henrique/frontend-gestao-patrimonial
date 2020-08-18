import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_NEW_MODAL_LOW_ITEM: "@lowItem/SHOW_NEW_MODAL_LOW_ITEM",
  HIDE_NEW_MODAL_LOW_ITEM: "@lowItem/HIDE_NEW_MODAL_LOW_ITEM",

  SHOW_UPDATE_MODAL_LOW_ITEM: "@lowItem/SHOW_UPDATE_MODAL_LOW_ITEM",
  HIDE_UPDATE_MODAL_LOW_ITEM: "@lowItem/HIDE_UPDATE_MODAL_LOW_ITEM",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_LOW_ITEM_REQUEST: "@lowItem/CREATE_LOW_ITEM_REQUEST",
  CREATE_LOW_ITEM_SUCCESS: "@lowItem/CREATE_LOW_ITEM_SUCCESS",

  READ_LOW_ITEM_REQUEST: "@lowItem/READ_LOW_ITEM_REQUEST",
  READ_LOW_ITEM_SUCCESS: "@lowItem/READ_LOW_ITEM_SUCCESS",

  UPDATE_LOW_ITEM_REQUEST: "@lowItem/UPDATE_LOW_ITEM_REQUEST",
  UPDATE_LOW_ITEM_SUCCESS: "@lowItem/UPDATE_LOW_ITEM_SUCCESS",

  DELETE_LOW_ITEM_REQUEST: "@lowItem/DELETE_LOW_ITEM_REQUEST",
  DELETE_LOW_ITEM_SUCCESS: "@lowItem/DELETE_LOW_ITEM_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_low_item: false,
  update_low_item: { visible: false, data: [] },

  low_items: [],
  loading_low_items: false,
});

export default function LowItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */
    case Types.SHOW_NEW_MODAL_LOW_ITEM:
      return { ...state, create_low_item: true };

    case Types.HIDE_NEW_MODAL_LOW_ITEM:
      return { ...state, create_low_item: false };

    case Types.SHOW_UPDATE_MODAL_LOW_ITEM:
      return {
        ...state,
        update_low_item: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_LOW_ITEM:
      return { ...state, update_low_item: { visible: false, data: [] } };

    case Types.READ_LOW_ITEM_REQUEST:
      return { ...state, loading_low_items: true };

    case Types.READ_LOW_ITEM_SUCCESS:
      return {
        ...state,
        loading_low_items: false,
        low_items: action.payload.low,
      };

    case Types.CREATE_LOW_ITEM_SUCCESS:
      return { ...state, low_items: [...state.low_items, action.payload.low] };

    case Types.UPDATE_LOW_ITEM_SUCCESS:
      return {
        ...state,
        low_items: updateItem(state.low_items, action.payload.low),
      };

    case Types.DELETE_LOW_ITEM_SUCCESS:
      return {
        ...state,
        low_items: [
          ...state.low_items.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    default:
      return state;
  }
}

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}

export const Creators = {
  /* --> Modal <-- */
  showNewLowItem: () => ({
    type: Types.SHOW_NEW_MODAL_LOW_ITEM,
  }),
  hideNewLowItem: () => ({
    type: Types.HIDE_NEW_MODAL_LOW_ITEM,
  }),
  showUpdateLowItem: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_LOW_ITEM,
    payload: {
      data,
    },
  }),
  hideUpdateLowItem: () => ({
    type: Types.HIDE_UPDATE_MODAL_LOW_ITEM,
  }),
  /* --> Modal <-- */

  createLowItemRequest: (low) => ({
    type: Types.CREATE_LOW_ITEM_REQUEST,
    payload: {
      low,
    },
  }),

  createLowItemSuccess: (low) => ({
    type: Types.CREATE_LOW_ITEM_SUCCESS,
    payload: {
      low,
    },
  }),

  updateLowItemRequest: (low) => ({
    type: Types.UPDATE_LOW_ITEM_REQUEST,
    payload: {
      low,
    },
  }),

  updateLowItemSuccess: (low) => ({
    type: Types.UPDATE_LOW_ITEM_SUCCESS,
    payload: {
      low,
    },
  }),

  readLowItemRequest: () => ({
    type: Types.READ_LOW_ITEM_REQUEST,
  }),

  readLowItemSuccess: (low) => ({
    type: Types.READ_LOW_ITEM_SUCCESS,
    payload: {
      low,
    },
  }),

  deleteLowItemRequest: (id) => ({
    type: Types.DELETE_LOW_ITEM_REQUEST,
    payload: {
      id,
    },
  }),

  deleteLowItemSuccess: (id) => ({
    type: Types.DELETE_LOW_ITEM_SUCCESS,
    payload: {
      id,
    },
  }),
};
