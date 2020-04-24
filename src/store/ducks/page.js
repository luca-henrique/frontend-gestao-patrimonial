import Immutable from "seamless-immutable";

export const Types = {
  CHANGE_PAGE_LOCATION: "@page/CHANGER_PAGE_LOCATION",
};

const INITIAL_STATE = Immutable({
  location: "default",
});

export default function addressPrefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CHANGE_PAGE_LOCATION:
      return {
        ...state,
        location: action.payload.location,
      };
    default:
      return state;
  }
}

export const Creators = {
  changePageLocation: (location) => ({
    type: Types.CHANGE_PAGE_LOCATION,
    payload: { location },
  }),
};
