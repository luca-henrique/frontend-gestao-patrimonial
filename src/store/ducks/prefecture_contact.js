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
  read_prefecture_contact: {},
  create_prefecture_contact: {},
  update_prefecture_contact: {},
});

export default function PrefectureContact(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_PREFECTURE_CONTACT_REQUEST:
      return { ...state, create_prefecture_contact: action.payload };

    case Types.READ_PREFECTURE_CONTACT_SUCCESS:
      return { ...state, read_prefecture_contact: action.payload };

    default:
      return state;
  }
}

export const Creators = {
  createPrefectureContactRequest: (contact) => ({
    type: Types.CREATE_PREFECTURE_CONTACT_REQUEST,
    payload: {
      contact,
    },
  }),

  readPrefectureContactRequest: () => ({
    type: Types.READ_PREFECTURE_CONTACT_REQUEST,
  }),

  readPrefectureContactSuccess: (contact) => ({
    type: Types.READ_PREFECTURE_CONTACT_SUCCESS,
    payload: {
      contact,
    },
  }),

  updatePrefectureContactRequest: (contact) => ({
    type: Types.UPDATE_PREFECTURE_CONTACT_REQUEST,
    payload: {
      contact,
    },
  }),
};
