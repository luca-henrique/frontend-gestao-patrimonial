import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import ActionsImage from "../ducks/image";
import { toastr } from "react-redux-toastr";
import { saveAs } from "file-saver";

export function* readImage({ patrimony_id }) {
  try {
    const { data } = yield call(api.get, `images/${patrimony_id}`);
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

    yield put(ActionsImage.uploadImageSuccess(data));

    toastr.success("A imagem foi adicionada.");
  } catch (err) {}
}

export function* deleteImage({ image_id }) {
  try {
    yield call(api.delete, `/images/${image_id}`);
    yield put(ActionsImage.deleteImageSuccess(image_id));
    toastr.error("A imagem foi deletada.");
  } catch (err) {}
}

export function* downloadImage({ id }) {
  try {
    const response = yield call(api.get, `/image/${id}`, {
      responseType: "arraybuffer",
    });

    saveAs(
      new Blob([response.data], { type: `image/png` }),
      response.data.name
    );
  } catch (err) {}
}
