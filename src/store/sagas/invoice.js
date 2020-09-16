import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import ActionsInvoice from "../ducks/invoice";
import { toastr } from "react-redux-toastr";
import { saveAs } from "file-saver";

export function* readInvoice({ patrimony_id }) {
  try {
    const { data } = yield call(api.get, `invoice/${patrimony_id}`);

    if (data) {
      yield put(ActionsInvoice.readInvoiceSuccess(true));
    } else {
      yield put(ActionsInvoice.readInvoiceSuccess(false));
    }
  } catch (err) {
    yield put(ActionsInvoice.readInvoiceSuccess(false));
  }
}

export function* uploadInvoice({ patrimony_id, invoice }) {
  try {
    const data = new FormData();
    data.append("file", invoice, invoice.name, invoice.type);

    yield call(api.post, `/invoice/${patrimony_id}`, data);
    yield put(ActionsInvoice.uploadInvoiceSuccess(true));
    toastr.success("A nota fiscal foi adicionada.");
  } catch (err) {}
}

export function* deleteInvoice({ patrimony_id }) {
  try {
    yield call(api.delete, `/invoice/${patrimony_id}`);
    yield put(ActionsInvoice.deleteInvoiceSuccess(false));
    toastr.error("A nota fiscal foi removida");
  } catch (err) {}
}

export function* downloadInvoice({ patrimony_id }) {
  try {
    const response = yield call(api.get, `/invoice/${patrimony_id}`, {
      responseType: "arraybuffer",
    });

    var file = new Blob([response.data], { type: "application/pdf" });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  } catch (err) {}
}
