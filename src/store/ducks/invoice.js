import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  readInvoiceRequest: ["patrimony_id"],
  readInvoiceSuccess: ["exist"],

  uploadInvoiceRequest: ["patrimony_id", "invoice"],
  uploadInvoiceSuccess: ["invoice"],

  deleteInvoiceRequest: ["patrimony_id"],
  deleteInvoiceSuccess: ["invoice"],

  downloadInvoiceRequest: ["patrimony_id"],
});

export const InvoiceTypes = Types;
export default Creators;

/* Initial State */

console.log(Types);
console.log(Creators);

export const INITIAL_STATE = Immutable({
  exist: false,
  invoice: {},
});

/* Reducers */

export const success = (state, { exist }) => {
  return { ...state, exist: exist };
};

export const deleteSuccess = (state, { exist }) => {
  return { ...state, exist: exist };
};

export const uploadSuccess = (state, { exist }) => {
  return { ...state, exist: exist };
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.READ_INVOICE_SUCCESS]: success,
  [Types.DELETE_INVOICE_SUCCESS]: deleteSuccess,
  [Types.UPLOAD_INVOICE_SUCCESS]: uploadSuccess,
});
