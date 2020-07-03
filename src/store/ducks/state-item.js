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
};
