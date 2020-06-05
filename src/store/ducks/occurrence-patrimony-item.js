import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ LIST,CREATE, UPDATE ] <- */

  SHOW_LIST_MODAL_LOW_PATRIMONY_ITEM:
    "@lowPatrimonyItem/SHOW_LIST_MODAL_LOW_PATRIMONY_ITEM",
  HIDE_LIST_MODAL_LOW_PATRIMONY_ITEM:
    "@lowPatrimonyItem/HIDE_LIST_MODAL_LOW_PATRIMONY_ITEM",

  SHOW_NEW_MODAL_LOW_PATRIMONY_ITEM:
    "@lowPatrimonyItem/SHOW_NEW_MODAL_LOW_PATRIMONY_ITEM",
  HIDE_NEW_MODAL_LOW_PATRIMONY_ITEM:
    "@lowPatrimonyItem/HIDE_NEW_MODAL_LOW_PATRIMONY_ITEM",

  SHOW_UPDATE_MODAL_LOW_PATRIMONY_ITEM:
    "@lowPatrimonyItem/SHOW_UPDATE_MODAL_LOW_PATRIMONY_ITEM",
  HIDE_UPDATE_MODAL_LOW_PATRIMONY_ITEM:
    "@lowPatrimonyItem/HIDE_UPDATE_MODAL_LOW_PATRIMONY_ITEM",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_LOW_PATRIMONY_ITEM_REQUEST:
    "@lowPatrimonyItemm/CREATE_LOW_PATRIMONY_ITEM_REQUEST",
  CREATE_LOW_PATRIMONY_ITEM_SUCCESS:
    "@lowPatrimonyItem/CREATE_LOW_PATRIMONY_ITEM_SUCCESS",

  READ_LOW_PATRIMONY_ITEM_REQUEST:
    "@lowPatrimonyItem/READ_LOW_PATRIMONY_ITEM_REQUEST",
  READ_LOW_PATRIMONY_ITEM_SUCCESS:
    "@lowPatrimonyItem/READ_LOW_PATRIMONY_ITEM_SUCCESS",

  UPDATE_LOW_PATRIMONY_ITEM_REQUEST:
    "@lowPatrimonyItem/UPDATE_LOW_PATRIMONY_ITEM_REQUEST",
  UPDATE_LOW_PATRIMONY_ITEM_SUCCESS:
    "@lowPatrimonyItem/UPDATE_LOW_PATRIMONY_ITEM_SUCCESS",

  DELETE_LOW_PATRIMONY_ITEM_REQUEST:
    "@lowPatrimonyItem/DELETE_LOW_PATRIMONY_ITEM_REQUEST",
  DELETE_LOW_PATRIMONY_ITEM_SUCCESS:
    "@lowPatrimonyItem/DELETE_LOW_PATRIMONY_ITEM_SUCCESS",
};

const INITIAL_STATE = Immutable({
  id_low_patrimony_item: 0,
  list_low_patrimony_item: false,
  create_low_patrimony_item: false,
  update_low_patrimony_item: { visible: false, data: [] },
});

export default function LowPatrimonyItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */

    case Types.SHOW_LIST_MODAL_LOW_PATRIMONY_ITEM:
      return { ...state, list_low_patrimony_item: true };

    case Types.HIDE_LIST_MODAL_LOW_PATRIMONY_ITEM:
      return { ...state, list_low_patrimony_item: false };

    case Types.SHOW_NEW_MODAL_LOW_PATRIMONY_ITEM:
      return { ...state, create_low_patrimony_item: true };

    case Types.HIDE_NEW_MODAL_LOW_PATRIMONY_ITEM:
      return { ...state, create_low_patrimony_item: false };

    case Types.SHOW_UPDATE_MODAL_LOW_PATRIMONY_ITEM:
      return {
        ...state,
        update_low_patrimony_item: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_LOW_PATRIMONY_ITEM:
      return {
        ...state,
        update_low_patrimony_item: { visible: false, data: [] },
      };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showListLowPatrimonyItem: () => ({
    type: Types.SHOW_LIST_MODAL_LOW_PATRIMONY_ITEM,
  }),
  hideListLowPatrimonyItem: () => ({
    type: Types.HIDE_LIST_MODAL_LOW_PATRIMONY_ITEM,
  }),
  showNewLowPatrimonyItem: () => ({
    type: Types.SHOW_NEW_MODAL_LOW_PATRIMONY_ITEM,
  }),
  hideNewLowPatrimonyItem: () => ({
    type: Types.HIDE_NEW_MODAL_LOW_PATRIMONY_ITEM,
  }),
  showUpdateLowPatrimonyItem: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_LOW_PATRIMONY_ITEM,
    payload: {
      data,
    },
  }),
  hideUpdateLowPatrimonyItem: () => ({
    type: Types.HIDE_UPDATE_MODAL_LOW_PATRIMONY_ITEM,
  }),
  /* --> Modal <-- */

  deleteLowPatrimonyItemRequest: (id) => ({
    type: Types.DELETE_LOW_PATRIMONY_ITEM_REQUEST,
    payload: {
      id,
    },
  }),
};
