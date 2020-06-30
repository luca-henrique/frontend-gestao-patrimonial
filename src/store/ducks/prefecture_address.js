import Immutable from "seamless-immutable";

export const Types = {
  CREATE_PREFECTURE_ADDRESS_REQUEST:
    "@prefecture_address/CREATE_PREFECTURE_ADDRESS_REQUEST",

  CREATE_PREFECTURE_ADDRESS_SUCCESS:
    "@prefecture_address/CREATE_PREFECTURE_ADDRESS_SUCCESS",

  READ_PREFECTURE_ADDRESS_REQUEST:
    "@prefecture_address/READ_PREFECTURE_ADDRESS_REQUEST",

  READ_PREFECTURE_ADDRESS_SUCCESS:
    "@prefecture_address/READ_PREFECTURE_ADDRESS_SUCCESS",

  UPDATE_PREFECTURE_ADDRESS_REQUEST:
    "@prefecture_address/UPDATE_PREFECTURE_ADDRESS_REQUEST",

  UPDATE_PREFECTURE_ADDRESS_SUCCESS:
    "@prefecture_address/UPDATE_PREFECTURE_ADDRESS_SUCCESS",
};

const INITIAL_STATE = Immutable({
  read_prefecture_address: {},
  create_prefecture_address: {},
  update_prefecture_address: {},
});

export default function PrefectureAddress(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_PREFECTURE_ADDRESS_REQUEST:
      return { ...state, create_prefecture_address: action.payload };

    case Types.READ_PREFECTURE_ADDRESS_SUCCESS:
      return { ...state, read_prefecture_address: action.payload };

    default:
      return state;
  }
}

export const Creators = {
  createPrefectureAddressRequest: (address) => ({
    type: Types.CREATE_PREFECTURE_ADDRESS_REQUEST,
    payload: {
      address,
    },
  }),

  readPrefectureAddressRequest: () => ({
    type: Types.READ_PREFECTURE_ADDRESS_REQUEST,
  }),

  readPrefectureAddressSuccess: (address) => ({
    type: Types.READ_PREFECTURE_ADDRESS_SUCCESS,
    payload: {
      address,
    },
  }),

  updatePrefectureAddressRequest: (address) => ({
    type: Types.UPDATE_PREFECTURE_ADDRESS_REQUEST,
    payload: {
      address,
    },
  }),
};
