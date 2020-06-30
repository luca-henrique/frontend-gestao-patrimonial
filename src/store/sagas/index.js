// eslint-disable-next-line no-unused-vars
import { all, takeLatest } from "redux-saga/effects";

import { initSocket } from "./socket";
import { startApplication } from "./start";

import { LicenseTypes } from "../ducks/license";
import { updateToken, checkLicense } from "./license";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

import { Types as AccountTypes } from "../ducks/account";
import {
  readUserJoined,
  readAccounts,
  deleteAccount,
  createAccount,
  updateAccount,
  changerPasswordAccount,
} from "./account";

import { Types as PrefectureTypes } from "../ducks/prefecture";
import {
  readPrefecture,
  createPrefecture,
  updatePrefecture,
} from "./prefecture";

import { Types as PrefectureAddressTypes } from "../ducks/prefecture_address";
import {
  readPrefectureAddress,
  createPrefectureAddress,
  updatePrefectureAddress,
} from "./prefecture_address";

import { Types as PrefectureContactTypes } from "../ducks/prefecture_contact";
import {
  readPrefectureContact,
  createPrefectureContact,
  updatePrefectureContact,
} from "./prefecture_contact";

export default function* rootSaga() {
  return yield all([
    takeLatest("persist/REHYDRATE", initSocket),
    takeLatest("persist/REHYDRATE", startApplication),
    takeLatest("persist/REHYDRATE", readPrefecture),
    takeLatest("persist/REHYDRATE", checkLicense), //Checar a linceça toda vez que acessa o sistema

    takeLatest(LicenseTypes.LICENSE_REQUEST, updateToken),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(AccountTypes.READ_ACCOUNT_JOINED_REQUEST, readUserJoined),
    takeLatest(AccountTypes.READ_ACCOUNT_REQUEST, readAccounts),
    takeLatest(AccountTypes.CREATE_ACCOUNT_REQUEST, createAccount),
    takeLatest(AccountTypes.DELETE_ACCOUNT_REQUEST, deleteAccount),
    takeLatest(AccountTypes.UPDATE_ACCOUNT_REQUEST, updateAccount),
    takeLatest(
      AccountTypes.ACCOUNT_CHANGE_PASSWORD_REQUEST,
      changerPasswordAccount
    ),

    takeLatest(PrefectureTypes.CREATE_PREFECTURE_REQUEST, createPrefecture),
    takeLatest(PrefectureTypes.UPDATE_PREFECTURE_REQUEST, updatePrefecture),

    takeLatest(
      PrefectureAddressTypes.READ_PREFECTURE_ADDRESS_REQUEST,
      readPrefectureAddress
    ),
    takeLatest(
      PrefectureAddressTypes.CREATE_PREFECTURE_ADDRESS_REQUEST,
      createPrefectureAddress
    ),
    takeLatest(
      PrefectureAddressTypes.UPDATE_PREFECTURE_ADDRESS_REQUEST,
      updatePrefectureAddress
    ),

    takeLatest(
      PrefectureContactTypes.READ_PREFECTURE_CONTACT_REQUEST,
      readPrefectureContact
    ),
    takeLatest(
      PrefectureContactTypes.CREATE_PREFECTURE_CONTACT_REQUEST,
      createPrefectureContact
    ),
    takeLatest(
      PrefectureContactTypes.UPDATE_PREFECTURE_CONTACT_REQUEST,
      updatePrefectureContact
    ),
  ]);
}
