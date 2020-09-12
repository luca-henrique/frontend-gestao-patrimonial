import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  readInvoiceRequest: ["patrimony_id"],
  readInvoiceSuccess: ["exist"],

  uploadInvoiceRequest: ["invoice"],
  uploadInvoiceSuccess: ["invoice"],

  downloadInvoiceRequest: ["invoice"],
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

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.READ_INVOICE_SUCCESS]: success,
});
