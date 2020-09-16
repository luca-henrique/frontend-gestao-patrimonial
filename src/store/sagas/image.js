import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import ActionsImage from "../ducks/image";
import { toastr } from "react-redux-toastr";
import { saveAs } from "file-saver";

export function* readImage({ patrimony_id }) {
  try {
    const { data } = yield call(api.get, `images/${patrimony_id}`);
    console.log(data);
    yield put(ActionsImage.readImageSuccess(data));
  } catch (err) {}
}

export function* uploadImage({ patrimony_id, images }) {
  try {
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i], images[i].name, images[i].type);
    }

    const { data } = yield call(api.post, `/images/${patrimony_id}`, formData);
    console.log(data);
    toastr.success("A nota fiscal foi adicionada.");
  } catch (err) {}
}

export function* deleteImage({ patrimony_id }) {
  try {
    yield call(api.delete, `/invoice/${patrimony_id}`);

    toastr.error("A nota fiscal foi removida");
  } catch (err) {}
}

export function* downloadImage({ id }) {
  try {
    const response = yield call(api.get, `/image/${id}`, {
      responseType: "arraybuffer",
    });

    /*
    var file = new Blob([response.data], { type: response.data.type });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);*/

    saveAs(
      new Blob([response.data], { type: `image/png` }),
      response.data.name
    );
  } catch (err) {}
}
