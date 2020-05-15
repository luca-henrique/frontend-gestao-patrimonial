import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_NEW_MODAL_LOCALE_ITEM: "@localeItem/SHOW_NEW_MODAL_LOCALE_ITEM",
  HIDE_NEW_MODAL_LOCALE_ITEM: "@localeItem/HIDE_NEW_MODAL_LOCALE_ITEM",

  SHOW_UPDATE_MODAL_LOCALE_ITEM: "@localeItem/SHOW_UPDATE_MODAL_LOCALE_ITEM",
  HIDE_UPDATE_MODAL_LOCALE_ITEM: "@localeItem/HIDE_UPDATE_MODAL_LOCALE_ITEM",

  /* -> REQUISIÇÔES [ CRUD ] <- */

  CREATE_LOCALE_ITEM_REQUEST: "@localeItem/CREATE_LOCALE_ITEM_REQUEST",
  CREATE_LOCALE_ITEM_SUCCESS: "@localeItem/CREATE_LOCALE_ITEM_SUCCESS",

  READ_LOCALE_ITEM_REQUEST: "@localeItem/READ_LOCALE_ITEM_REQUEST",
  READ_LOCALE_ITEM_SUCCESS: "@localeItem/READ_LOCALE_ITEM_SUCCESS",

  UPDATE_LOCALE_ITEM_REQUEST: "@localeItem/UPDATE_LOCALE_ITEM_REQUEST",
  UPDATE_LOCALE_ITEM_SUCCESS: "@localeItem/UPDATE_LOCALE_ITEM_SUCCESS",

  DELETE_LOCALE_ITEM_REQUEST: "@localeItem/DELETE_LOCALE_ITEM_REQUEST",
  DELETE_LOCALE_ITEM_SUCCESS: "@localeItem/DELETE_LOCALE_ITEM_SUCCESS",
};

const INITIAL_STATE = Immutable({
  create_locale_item: false,
  update_locale_item: { visible: false, data: [] },
});

export default function LocaleItem(state = INITIAL_STATE, action) {
  switch (action.type) {
    /* --> Controller[Action] <-- */
    case Types.SHOW_NEW_MODAL_LOCALE_ITEM:
      return { ...state, create_locale_item: true };

    case Types.HIDE_NEW_MODAL_LOCALE_ITEM:
      return { ...state, create_locale_item: false };

    case Types.SHOW_UPDATE_MODAL_LOCALE_ITEM:
      return {
        ...state,
        update_locale_item: { visible: true, data: action.payload.data },
      };

    case Types.HIDE_UPDATE_MODAL_LOCALE_ITEM:
      return { ...state, update_locale_item: { visible: false, data: [] } };

    default:
      return state;
  }
}

export const Creators = {
  /* --> Modal <-- */
  showNewLocaleItem: () => ({
    type: Types.SHOW_NEW_MODAL_LOCALE_ITEM,
  }),
  hideNewLocaleItem: () => ({
    type: Types.HIDE_NEW_MODAL_LOCALE_ITEM,
  }),
  showUpdateLocaleItem: (data) => ({
    type: Types.SHOW_UPDATE_MODAL_LOCALE_ITEM,
    payload: {
      data,
    },
  }),
  hideUpdateLocaleItem: () => ({
    type: Types.HIDE_UPDATE_MODAL_LOCALE_ITEM,
  }),
  /* --> Modal <-- */
};
