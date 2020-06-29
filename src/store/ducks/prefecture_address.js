import Immutable from "seamless-immutable";

export const Types = {
  CREATE_PREFECTURE_ADDRESS_REQUEST:
    "@prefecture_address/CREATE_PREFECTURE_ADDRESS_REQUEST",

  CREATE_PREFECTURE_ADDRESS_SUCCESS:
    "@prefecture_address/CREATE_PREFECTURE_ADDRESS_SUCCESS",

  READ_PREFECTURE_ADDRESS_REQUEST:
    "@prefecture_address/READ_PREFECTURE_ADDRESS_REQUEST",

  READ_PREFECTURE_ADDRESS_SUCCESS:
    "@prefecture_address/READ_PREFECTURE_ADDRESS_REQUEST",

  UPDATE_PREFECTURE_ADDRESS_REQUEST:
    "@prefecture_address/UPDATE_PREFECTURE_ADDRESS_REQUEST",

  UPDATE_PREFECTURE_ADDRESS_SUCCESS:
    "@prefecture_address/UPDATE_PREFECTURE_ADDRESS_SUCCESS",
};

const INITIAL_STATE = Immutable({
  read_prefecture: {},
  create_prefeture: {},
  update_prefecture: {},
});

export default function Prefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_PREFECTURE_ADDRESS_REQUEST:
      return { ...state, create_prefeture: action.payload };

    case Types.READ_PREFECTURE_ADDRESS_SUCCESS:
      return { ...state, read_prefecture: action.payload };

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
    type: Types.CREATE_PREFECTURE_ADDRESS_SUCCESS,
    payload: {
      address,
    },
  }),
};
