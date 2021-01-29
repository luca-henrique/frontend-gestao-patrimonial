/* eslint-disable no-labels */
import { saveAs } from "file-saver";
import { Immutable } from "seamless-immutable";
export const types = {
  CREATE_REPORT_INVENTORY_REQUEST: "@report/CREATE_REPORT_INVENTORY_REQUEST",
  CREATE_REPORT_INVENTORY_SUCESS: "@report/CREATE_REPORT_INVENTORY_SUCESS",
  CREATE_REPORT_INVENTORY_FAIL: "@report/CREATE_REPORT_INVENTORY_FAIL",
};

const INITIAL_STATE = {
  file: null,
};

export default function Report(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_REPORT_INVENTORY:
      return {
        ...state,
        file: action.payload.file,
      };

    default:
      return state;
  }
}

export const Creators = {
  createReportInventoryRequest: () => {
    return {
      type: types.CREATE_REPORT_INVENTORY_REQUEST,
    };
  },
  createReportSucess: (file) => {
    return {
      type: types.CREATE_REPORT_INVENTORY_SUCESS,
      payload: {
        file,
      },
    };
  },
};
