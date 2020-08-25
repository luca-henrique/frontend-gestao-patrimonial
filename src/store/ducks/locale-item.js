import Immutable from "seamless-immutable";

export const Types = {
  /* -> Modal [ CREATE, UPDATE ] <- */

  SHOW_NEW_MODAL_LOCALE_ITEM: "@localeItem/SHOW_NEW_MODAL_LOCALE_ITEM",
  HIDE_NEW_MODAL_LOCALE_ITEM: "@localeItem/HIDE_NEW_MODAL_LOCALE_ITEM",

  SHOW_UPDATE_MODAL_LOCALE_ITEM: "@localeItem/SHOW_UPDATE_MODAL_LOCALE_ITEM",
  HIDE_UPDATE_MODAL_LOCALE_ITEM: "@localeItem/HIDE_UPDATE_MODAL_LOCALE_ITEM",

  SHOW_LOCALE_ITEM_SECTORS: "@localeItem/SHOW_LOCALE_ITEM_SECTORS",
  HIDE_LOCALE_ITEM_SECTORS: "@localeItem/HIDE_LOCALE_ITEM_SECTORS",

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

  locale_items: [],
  locale_item_loading: false,
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

    case Types.READ_LOCALE_ITEM_REQUEST:
      return { ...state, locale_item_loading: true };

    case Types.READ_LOCALE_ITEM_SUCCESS:
      return {
        ...state,
        locale_items: action.payload.data,
        locale_item_loading: false,
      };

    case Types.DELETE_LOCALE_ITEM_SUCCESS:
      return {
        ...state,
        locale_items: [
          ...state.locale_items.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    case Types.CREATE_LOCALE_ITEM_SUCCESS:
      return {
        ...state,
        locale_items: [...state.locale_items, action.payload.data],
      };

    case Types.UPDATE_LOCALE_ITEM_SUCCESS:
      return {
        ...state,
        locale_items: updateItem(state.locale_items, action.payload.data),
      };

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

  readLocaleItemRequest: () => ({
    type: Types.READ_LOCALE_ITEM_REQUEST,
  }),

  readLocaleItemSuccess: (data) => ({
    type: Types.READ_LOCALE_ITEM_SUCCESS,
    payload: { data },
  }),

  createLocaleItemRequest: (data) => ({
    type: Types.CREATE_LOCALE_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  createLocaleItemSuccess: (data) => ({
    type: Types.CREATE_LOCALE_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  updateLocaleItemRequest: (data) => ({
    type: Types.UPDATE_LOCALE_ITEM_REQUEST,
    payload: {
      data,
    },
  }),

  updateLocaleItemSuccess: (data) => ({
    type: Types.UPDATE_LOCALE_ITEM_SUCCESS,
    payload: {
      data,
    },
  }),

  deleteLocaleItemRequest: (id) => ({
    type: Types.DELETE_LOCALE_ITEM_REQUEST,
    payload: {
      id,
    },
  }),

  deleteLocaleItemSuccess: (id) => ({
    type: Types.DELETE_LOCALE_ITEM_SUCCESS,
    payload: {
      id,
    },
  }),
};

function updateItem(items, item) {
  const index = items.findIndex((itemArray) => itemArray.id === item.id);
  return [...items.slice(0, index), { ...item }, ...items.slice(index + 1)];
}
