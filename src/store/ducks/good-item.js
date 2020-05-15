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
});

export default function GoodItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */
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
};
