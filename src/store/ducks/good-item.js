import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_NEW_MODAL_GOOD_ITEM: "@goodItem/SHOW_NEW_MODAL_GOOD_ITEM",
  HIDE_NEW_MODAL_GOOD_ITEM: "@goodItem/HIDE_NEW_MODAL_GOOD_ITEM",

  SHOW_UPDATE_MODAL_GOOD_ITEM: "@goodItem/SHOW_UPDATE_MODAL_GOOD_ITEM",
  HIDE_UPDATE_MODAL_GOOD_ITEM: "@goodItem/HIDE_UPDATE_MODAL_GOOD_ITEM",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_GOOD_ITEM_REQUEST: "@goodItem/CREATE_GOOD_ITEM_REQUEST",
  CREATE_GOOD_ITEM_SUCCESS: "@goodItem/CREATE_GOOD_ITEM_SUCCESS",

  READ_GOOD_ITEM_REQUEST: "@goodItem/READ_GOOD_ITEM_REQUEST",
  READ_GOOD_ITEM_SUCCESS: "@goodItem/READ_GOOD_ITEM_SUCCESS",

  UPDATE_GOOD_ITEM_REQUEST: "@goodItem/UPDATE_GOOD_ITEM_REQUEST",
  UPDATE_GOOD_ITEM_SUCCESS: "@goodItem/UPDATE_GOOD_ITEM_SUCCESS",

  DELETE_GOOD_ITEM_REQUEST: "@goodItem/DELETE_GOOD_ITEM_REQUEST",
  DELETE_GOOD_ITEM_SUCCESS: "@goodItem/DELETE_GOOD_ITEM_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_good_item: false,
  update_good_item: { visible: false, data: [] },

  good_items: [],
  loading_good_items: false,
});

export default function GoodItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NEW_MODAL_GOOD_ITEM:
      return { ...state, create_good_item: true };

    case Types.HIDE_NEW_MODAL_GOOD_ITEM:
      return { ...state, create_good_item: false };

    case Types.SHOW_UPDATE_MODAL_GOOD_ITEM:
      return {
        ...state,
        update_good_item: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_GOOD_ITEM:
      return { ...state, update_good_item: { visible: false, data: [] } };

    case Types.READ_GOOD_ITEM_REQUEST:
      return { ...state, loading_good_items: true };

    case Types.READ_GOOD_ITEM_SUCCESS:
      return {
        ...state,
        good_items: action.payload.data,
        loading_good_items: false,
      };

    case Types.DELETE_GOOD_ITEM_SUCCESS:
      return {
        ...state,
        good_items: [
          ...state.good_items.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_GOOD_ITEM_SUCCESS:
      return {
        ...state,
        good_items: [...state.good_items, action.payload.data],
      };

    case Types.UPDATE_GOOD_ITEM_SUCCESS:
      return {
        ...state,
        good_items: updateItem(state.good_items, action.payload.data),
      };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showNewGoodItem: () => ({
    type: Types.SHOW_NEW_MODAL_GOOD_ITEM,
  }),
  hideNewGoodItem: () => ({
    type: Types.HIDE_NEW_MODAL_GOOD_ITEM,
  }),
  showUpdateGoodItem: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_GOOD_ITEM,
    payload: {
      data,
    },
  }),
  hideUpdateGoodItem: () => ({
    type: Types.HIDE_UPDATE_MODAL_GOOD_ITEM,
  }),
  /* --> Modal <-- */

  readGoodItemRequest: () => ({
    type: Types.READ_GOOD_ITEM_REQUEST,
  }),

  readGoodItemSuccess: (data) => ({
    type: Types.READ_GOOD_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  createGoodItemRequest: (data) => ({
    type: Types.CREATE_GOOD_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  createGoodItemSuccess: (data) => ({
    type: Types.CREATE_GOOD_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  updateGoodItemRequest: (data) => ({
    type: Types.UPDATE_GOOD_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  updateGoodItemSuccess: (data) => ({
    type: Types.UPDATE_GOOD_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  deleteGoodItemRequest: (id) => ({
    type: Types.DELETE_GOOD_ITEM_REQUEST,
    payload: {
      id,
    },
  }),

  deleteGoodItemSuccess: (id) => ({
    type: Types.DELETE_GOOD_ITEM_SUCCESS,
    payload: {
      id,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}
