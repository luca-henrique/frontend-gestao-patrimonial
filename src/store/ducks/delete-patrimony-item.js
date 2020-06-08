import Immutable from "seamless-immutable";

export const Types = {
  /* Abrir/fechar permissão para excluir patrimonio[admin] */
  SHOW_MODAL_DELETE_PATRIMONY_ADMIN:
    "@patrimony-item-delete/SHOW_MODAL_DELETE_PATRIMONY_ADMIN",
  HIDE_MODAL_DELETE_PATRIMONY_ADMIN:
    "@patrimony-item-delete/HIDE_MODAL_DELETE_PATRIMONY_ADMIN",

  /* Abrir/fechar permissão para excluir patrimonio[user] */
  SHOW_MODAL_DELETE_PATRIMONY_USER:
    "@patrimony-item-delete/SHOW_MODAL_DELETE_PATRIMONY_USER",
  HIDE_MODAL_DELETE_PATRIMONY_USER:
    "@patrimony-item-delete/HIDE_MODAL_DELETE_PATRIMONY_USER",

  DELETE_PATRIMONY_ADMIN_REQUEST:
    "@patrimony-item-delete/DELETE_PATRIMONY_ADMIN_REQUEST",
  DELETE_PATRIMONY_USER_REQUEST:
    "@patrimony-item-delete/DELETE_PATRIMONY_USER_REQUEST",
};

const INITIAL_STATE = Immutable({
  delete_admin: { visible: false, id_patrimony: 0 },
  delete_user: { visible: false, id_patrimony: 0 },

  delete_patrimony_admin: { id_patrimony: 0 },
  delete_patrimony_user: { admin: {}, id_patrimony: 0 },
});

export default function PatrimonyDelete(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_DELETE_PATRIMONY_ADMIN:
      return {
        ...state,
        delete_admin: { visible: true, id_patrimony: action.payload.id },
      };
    case Types.HIDE_MODAL_DELETE_PATRIMONY_ADMIN:
      return {
        ...state,
        delete_admin: { visible: false, id_patrimony: 0 },
      };

    case Types.SHOW_MODAL_DELETE_PATRIMONY_USER:
      return {
        ...state,
        delete_user: { visible: true, id_patrimony: action.payload.id },
      };
    case Types.HIDE_MODAL_DELETE_PATRIMONY_USER:
      return {
        ...state,
        delete_user: { visible: false, id_patrimony: 0 },
      };

    case Types.DELETE_PATRIMONY_ADMIN_REQUEST:
      return {
        ...state,
        delete_patrimony_admin: { id_patrimony: action.payload.id },
      };

    case Types.DELETE_PATRIMONY_USER_REQUEST:
      return {
        ...state,
        delete_patrimony_user: {
          admin: action.payload.admin,
          id_patrimony: action.payload.id,
        },
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalDeletePatrimonyAdmin: (id) => ({
    type: Types.SHOW_MODAL_DELETE_PATRIMONY_ADMIN,
    payload: {
      id,
    },
  }),

  hideModalDeletePatrimonyAdmin: () => ({
    type: Types.HIDE_MODAL_DELETE_PATRIMONY_ADMIN,
  }),

  showModalDeletePatrimonyUser: (id) => ({
    type: Types.SHOW_MODAL_DELETE_PATRIMONY_USER,
    payload: {
      id,
    },
  }),

  hideModalDeletePatrimonyUser: () => ({
    type: Types.HIDE_MODAL_DELETE_PATRIMONY_USER,
  }),

  deletePatrimonyAdminRequest: (id) => ({
    type: Types.DELETE_PATRIMONY_ADMIN_REQUEST,
    payload: {
      id,
    },
  }),

  deletePatrimonyUserRequest: (admin, id) => ({
    type: Types.DELETE_PATRIMONY_USER_REQUEST,
    payload: {
      admin,
      id,
    },
  }),
};
