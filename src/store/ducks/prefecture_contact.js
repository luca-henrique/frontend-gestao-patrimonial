import Immutable from "seamless-immutable";

export const Types = {
  CREATE_PREFECTURE_CONTACT_REQUEST:
    "@prefecture_contact/CREATE_PREFECTURE_CONTACT_REQUEST",

  CREATE_PREFECTURE_CONTACT_SUCCESS:
    "@prefecture_contact/CREATE_PREFECTURE_CONTACT_SUCCESS",

  READ_PREFECTURE_CONTACT_REQUEST:
    "@prefecture_contact/READ_PREFECTURE_CONTACT_REQUEST",

  READ_PREFECTURE_CONTACT_SUCCESS:
    "@prefecture_contact/READ_PREFECTURE_CONTACT_SUCCESS",

  UPDATE_PREFECTURE_CONTACT_REQUEST:
    "@prefecture_contact/UPDATE_PREFECTURE_CONTACT_REQUEST",

  UPDATE_PREFECTURE_CONTACT_SUCCESS:
    "@prefecture_contact/UPDATE_PREFECTURE_CONTACT_SUCCESS",
};

const INITIAL_STATE = Immutable({
  contact: {},
  loading: false,
});

export default function PrefectureContact(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.READ_PREFECTURE_CONTACT_REQUEST:
      return { ...state, loading: false };

    case Types.READ_PREFECTURE_CONTACT_SUCCESS:
      return { ...state, contact: action.payload.data, loading: false };

    case Types.CREATE_PREFECTURE_CONTACT_SUCCESS:
      return { ...state, contact: action.payload.data };

    default:
      return state;
  }
}

export const Creators = {
  createPrefectureContactRequest: (data) => ({
    type: Types.CREATE_PREFECTURE_CONTACT_REQUEST,
    payload: {
      data,
    },
  }),

  readPrefectureContactRequest: (id) => ({
    type: Types.READ_PREFECTURE_CONTACT_REQUEST,
    payload: { id },
  }),

  readPrefectureContactSuccess: (data) => ({
    type: Types.READ_PREFECTURE_CONTACT_SUCCESS,
    payload: {
      data,
    },
  }),

  updatePrefectureContactRequest: (data) => ({
    type: Types.UPDATE_PREFECTURE_CONTACT_REQUEST,
    payload: {
      data,
    },
  }),

  updatePrefectureContactSuccess: (data) => ({
    type: Types.UPDATE_PREFECTURE_CONTACT_SUCCESS,
    payload: {
      data,
    },
  }),
};
