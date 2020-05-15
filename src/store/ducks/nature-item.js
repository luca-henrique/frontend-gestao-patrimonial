import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_NEW_MODAL_NATURE_ITEM: "@natureItem/SHOW_NEW_MODAL_NATURE_ITEM",
  HIDE_NEW_MODAL_NATURE_ITEM: "@natureItem/HIDE_NEW_MODAL_NATURE_ITEM",

  SHOW_UPDATE_MODAL_NATURE_ITEM: "@natureItem/SHOW_UPDATE_MODAL_NATURE_ITEM",
  HIDE_UPDATE_MODAL_NATURE_ITEM: "@natureItem/HIDE_UPDATE_MODAL_NATURE_ITEM",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_NATURE_ITEM_REQUEST: "@natureItem/CREATE_NATURE_ITEM_REQUEST",
  CREATE_NATURE_ITEM_SUCCESS: "@natureItem/CREATE_NATURE_ITEM_SUCCESS",

  READ_NATURE_ITEM_REQUEST: "@natureItem/READ_NATURE_ITEM_REQUEST",
  READ_NATURE_ITEM_SUCCESS: "@natureItem/READ_NATURE_ITEM_SUCCESS",

  UPDATE_NATURE_ITEM_REQUEST: "@natureItem/UPDATE_NATURE_ITEM_REQUEST",
  UPDATE_NATURE_ITEM_SUCCESS: "@natureItem/UPDATE_NATURE_ITEM_SUCCESS",

  DELETE_NATURE_ITEM_REQUEST: "@natureItem/DELETE_NATURE_ITEM_REQUEST",
  DELETE_NATURE_ITEM_SUCCESS: "@natureItem/DELETE_NATURE_ITEM_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_nature_item: false,
  update_nature_item: { visible: false, data: [] },
});

export default function NatureItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */
    case Types.SHOW_NEW_MODAL_NATURE_ITEM:
      return { ...state, create_nature_item: true };

    case Types.HIDE_NEW_MODAL_NATURE_ITEM:
      return { ...state, create_nature_item: false };

    case Types.SHOW_UPDATE_MODAL_NATURE_ITEM:
      return {
        ...state,
        update_nature_item: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_NATURE_ITEM:
      return { ...state, update_nature_item: { visible: false, data: [] } };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showNewNatureItem: () => ({
    type: Types.SHOW_NEW_MODAL_NATURE_ITEM,
  }),
  hideNewNatureItem: () => ({
    type: Types.HIDE_NEW_MODAL_NATURE_ITEM,
  }),
  showUpdateNatureItem: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_NATURE_ITEM,
    payload: {
      data,
    },
  }),
  hideUpdateNatureItem: () => ({
    type: Types.HIDE_UPDATE_MODAL_NATURE_ITEM,
  }),
  /* --> Modal <-- */
};
