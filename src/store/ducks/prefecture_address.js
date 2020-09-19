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
  address: {},
  loading: false,
});

export default function Adrress(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.READ_PREFECTURE_ADDRESS_REQUEST:
      return { ...state, loading: true };

    case Types.READ_PREFECTURE_ADDRESS_SUCCESS:
      return { ...state, address: action.payload.data, loading: false };

    case Types.UPDATE_PREFECTURE_ADDRESS_SUCCESS:
      return { ...state, address: action.payload.data };

    default:
      return state;
  }
}

export const Creators = {
  createPrefectureAddressRequest: (data) => ({
    type: Types.CREATE_PREFECTURE_ADDRESS_REQUEST,
    payload: {
      data,
    },
  }),

  readPrefectureAddressRequest: () => ({
    type: Types.READ_PREFECTURE_ADDRESS_REQUEST,
  }),

  readPrefectureAddressSuccess: (data) => ({
    type: Types.READ_PREFECTURE_ADDRESS_SUCCESS,
    payload: {
      data,
    },
  }),

  updatePrefectureAddressRequest: (data) => ({
    type: Types.UPDATE_PREFECTURE_ADDRESS_REQUEST,
    payload: {
      data,
    },
  }),

  updatePrefectureAddressSuccess: (data) => ({
    type: Types.UPDATE_PREFECTURE_ADDRESS_SUCCESS,
    payload: {
      data,
    },
  }),
};
