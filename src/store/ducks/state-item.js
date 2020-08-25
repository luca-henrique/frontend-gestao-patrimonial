import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_NEW_MODAL_STATE_ITEM: "@stateItem/SHOW_NEW_MODAL_STATE_ITEM",
  HIDE_NEW_MODAL_STATE_ITEM: "@stateItem/HIDE_NEW_MODAL_STATE_ITEM",

  SHOW_UPDATE_MODAL_STATE_ITEM: "@stateItem/SHOW_UPDATE_MODAL_STATE_ITEM",
  HIDE_UPDATE_MODAL_STATE_ITEM: "@stateItem/HIDE_UPDATE_MODAL_STATE_ITEM",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_STATE_ITEM_REQUEST: "@stateItem/CREATE_STATE_ITEM_REQUEST",
  CREATE_STATE_ITEM_SUCCESS: "@stateItem/CREATE_STATE_ITEM_SUCCESS",

  READ_STATE_ITEM_REQUEST: "@stateItem/READ_STATE_ITEM_REQUEST",
  READ_STATE_ITEM_SUCCESS: "@stateItem/READ_STATE_ITEM_SUCCESS",

  UPDATE_STATE_ITEM_REQUEST: "@stateItem/UPDATE_STATE_ITEM_REQUEST",
  UPDATE_STATE_ITEM_SUCCESS: "@stateItem/UPDATE_STATE_ITEM_SUCCESS",

  DELETE_STATE_ITEM_REQUEST: "@stateItem/DELETE_STATE_ITEM_REQUEST",
  DELETE_STATE_ITEM_SUCCESS: "@stateItem/DELETE_STATE_ITEM_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_state_item: false,
  update_state_item: { visible: false, data: [] },

  state_items: [],
  loading_state_items: false,
});

export default function StateItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */
    case Types.SHOW_NEW_MODAL_STATE_ITEM:
      return { ...state, create_state_item: true };

    case Types.HIDE_NEW_MODAL_STATE_ITEM:
      return { ...state, create_state_item: false };

    case Types.SHOW_UPDATE_MODAL_STATE_ITEM:
      return {
        ...state,
        update_state_item: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_STATE_ITEM:
      return { ...state, update_state_item: { visible: false, data: [] } };

    case Types.READ_STATE_ITEM_REQUEST:
      return { ...state, loading_state_items: true };

    case Types.READ_STATE_ITEM_SUCCESS:
      return {
        ...state,
        state_items: action.payload.data,
        loading_state_items: false,
      };

    case Types.DELETE_STATE_ITEM_SUCCESS:
      return {
        ...state,
        state_items: [
          ...state.state_items.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_STATE_ITEM_SUCCESS:
      return {
        ...state,
        state_items: [...state.state_items, action.payload.data],
      };

    case Types.UPDATE_STATE_ITEM_SUCCESS:
      return {
        ...state,
        state_items: updateItem(state.state_items, action.payload.data),
      };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showNewStateItem: () => ({
    type: Types.SHOW_NEW_MODAL_STATE_ITEM,
  }),
  hideNewStateItem: () => ({
    type: Types.HIDE_NEW_MODAL_STATE_ITEM,
  }),
  showUpdateStateItem: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_STATE_ITEM,
    payload: {
      data,
    },
  }),
  hideUpdateStateItem: () => ({
    type: Types.HIDE_UPDATE_MODAL_STATE_ITEM,
  }),
  /* --> Modal <-- */

  readStateItemRequest: () => ({
    type: Types.READ_STATE_ITEM_REQUEST,
  }),

  readStateItemSuccess: (data) => ({
    type: Types.READ_STATE_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  createStateItemRequest: (data) => ({
    type: Types.CREATE_STATE_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  createStateItemSuccess: (data) => ({
    type: Types.CREATE_STATE_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  updateStateItemRequest: (data) => ({
    type: Types.UPDATE_STATE_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  updateStateItemSuccess: (data) => ({
    type: Types.UPDATE_STATE_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  deleteStateItemRequest: (id) => ({
    type: Types.DELETE_STATE_ITEM_REQUEST,
    payload: {
      id,
    },
  }),

  deleteStateItemSuccess: (id) => ({
    type: Types.DELETE_STATE_ITEM_SUCCESS,
    payload: {
      id,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}
