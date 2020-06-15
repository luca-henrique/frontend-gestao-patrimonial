import Immutable from "seamless-immutable";

export const Types = {
  SHOW_DRAWER_MENU: "drawer/SHOW_DRAWER_MENU",
  HIDE_DRAWER_MENU: "drawer/HIDE_DRAWER_MENU",
};

const INITIAL_STATE = Immutable({
  drawer: { visible: true },
});

export default function addressPrefecture(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_DRAWER_MENU:
      return {
        ...state,
        drawer: { visible: true },
      };
    case Types.HIDE_DRAWER_MENU:
      return {
        ...state,
        drawer: { visible: false },
      };
    default:
      return state;
  }
}

export const Creators = {
  showDrawerMenu: () => ({
    type: Types.SHOW_DRAWER_MENU,
  }),

  hideDrawerMenu: () => ({
    type: Types.HIDE_DRAWER_MENU,
  }),
};
