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

import { PrefectureImageTypes } from "../ducks/prefecture-image";
import {
  readImagePrefecture,
  updatePrefectureImage,
  uploadPrefectureImage,
} from "./prefecture-image";

import { Types as LowItemTypes } from "../ducks/low-item";
import {
  readLowItem,
  createLowItem,
  deleteLowItem,
  updateLowItem,
} from "./low-item";

import { Types as GoodItemTypes } from "../ducks/good-item";
import {
  readGoodItem,
  deleteGoodItem,
  updateGoodItem,
  createGoodItem,
} from "./good-item";

import { Types as StateItemTypes } from "../ducks/state-item";
import {
  readStateItem,
  createStateItem,
  deleteStateItem,
  updateStateItem,
} from "./state-item";

import { Types as NatureItemTypes } from "../ducks/nature-item";
import {
  readNatureItem,
  deleteNatureItem,
  createNatureItem,
  updateNatureItem,
} from "./nature-item";

import { Types as OriginItemTypes } from "../ducks/origin-item";
import {
  readOriginItem,
  createOriginItem,
  updateOriginItem,
  deleteOriginItem,
} from "./origin-item";

import { Types as OccurenceItemTypes } from "../ducks/occurrence-item";
import {
  readOccurrenceItem,
  createOccurrenceItem,
  deleteOccurrenceItem,
  updateOccurenceItem,
} from "./occurrence-item";

import { Types as LocaleItemTypes } from "../ducks/locale-item";
import {
  readLocaleItem,
  readUniqueLocaleItem,
  createLocaleItem,
  updateLocaleItem,
  deleteLocaleItem,
} from "./locale-item";

import { Types as SectorsTypes } from "../ducks/sectors";
import {
  readSector,
  createSector,
  updateSector,
  deleteSector,
  readUniqueSector,
} from "./sector";

import { Types as UnitsTypes } from "../ducks/units";
import {
  readUnit,
  createUnit,
  deleteUnit,
  updateUnit,
  readUniqueUnit,
} from "./units";

import { Types as PatrimonyTypes } from "../ducks/patrimony";
import {
  readPatrimony,
  createPatrimony,
  updatePatrimony,
  deletePatrimony,
  duplicatePatrimony,
} from "./patrimony";

import { Types as LowPatrimony } from "../ducks/low-patrimony-item";
import {
  readLowItemPatrimony,
  createLowItemPatrimony,
  deleteLowPatrimonyItem,
} from "./low-patrimony-item";

import { Types as TransferencePatrimony } from "../ducks/transference-patrimony-item";
import {
  readTransferencersPatrimony,
  deleteTransferencePatrimony,
  createTransferencePatrimony,
  updateTransferencePatrimony,
} from "./transference-patrimony-item";

import { Types as OccurrencePatrimony } from "../ducks/occurrence-patrimony-item";
import {
  readOccurrencePatrimony,
  createOccurrencePatrimony,
  updateOccurencePatrimony,
} from "./occurence-patrimony";

import { InvoiceTypes } from "../ducks/invoice";
import {
  uploadInvoice,
  readInvoice,
  downloadInvoice,
  deleteInvoice,
} from "./invoice";

import { ImagesTypes } from "../ducks/image";
import { readImage, uploadImage, deleteImage, downloadImage } from "./image";

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

    takeLatest(LowItemTypes.READ_LOW_ITEM_REQUEST, readLowItem),
    takeLatest(LowItemTypes.CREATE_LOW_ITEM_REQUEST, createLowItem),
    takeLatest(LowItemTypes.DELETE_LOW_ITEM_REQUEST, deleteLowItem),
    takeLatest(LowItemTypes.UPDATE_LOW_ITEM_REQUEST, updateLowItem),

    takeLatest(GoodItemTypes.READ_GOOD_ITEM_REQUEST, readGoodItem),
    takeLatest(GoodItemTypes.CREATE_GOOD_ITEM_REQUEST, createGoodItem),
    takeLatest(GoodItemTypes.DELETE_GOOD_ITEM_REQUEST, deleteGoodItem),
    takeLatest(GoodItemTypes.UPDATE_GOOD_ITEM_REQUEST, updateGoodItem),

    takeLatest(StateItemTypes.READ_STATE_ITEM_REQUEST, readStateItem),
    takeLatest(StateItemTypes.CREATE_STATE_ITEM_REQUEST, createStateItem),
    takeLatest(StateItemTypes.UPDATE_STATE_ITEM_REQUEST, updateStateItem),
    takeLatest(StateItemTypes.DELETE_STATE_ITEM_REQUEST, deleteStateItem),

    takeLatest(NatureItemTypes.READ_NATURE_ITEM_REQUEST, readNatureItem),
    takeLatest(NatureItemTypes.CREATE_NATURE_ITEM_REQUEST, createNatureItem),
    takeLatest(NatureItemTypes.UPDATE_NATURE_ITEM_REQUEST, updateNatureItem),
    takeLatest(NatureItemTypes.DELETE_NATURE_ITEM_REQUEST, deleteNatureItem),

    takeLatest(OriginItemTypes.READ_ORIGIN_ITEM_REQUEST, readOriginItem),
    takeLatest(OriginItemTypes.CREATE_ORIGIN_ITEM_REQUEST, createOriginItem),
    takeLatest(OriginItemTypes.UPDATE_ORIGIN_ITEM_REQUEST, updateOriginItem),
    takeLatest(OriginItemTypes.DELETE_ORIGIN_ITEM_REQUEST, deleteOriginItem),

    takeLatest(
      OccurenceItemTypes.READ_OCCURRENCE_ITEM_REQUEST,
      readOccurrenceItem
    ),
    takeLatest(
      OccurenceItemTypes.CREATE_OCCURRENCE_ITEM_REQUEST,
      createOccurrenceItem
    ),
    takeLatest(
      OccurenceItemTypes.UPDATE_OCCURRENCE_ITEM_REQUEST,
      updateOccurenceItem
    ),
    takeLatest(
      OccurenceItemTypes.DELETE_OCCURRENCE_ITEM_REQUEST,
      deleteOccurrenceItem
    ),

    takeLatest(LocaleItemTypes.READ_LOCALE_ITEM_REQUEST, readLocaleItem),
    takeLatest(
      LocaleItemTypes.READ_UNIQUE_LOCALE_ITEM_REQUEST,
      readUniqueLocaleItem
    ),
    takeLatest(LocaleItemTypes.CREATE_LOCALE_ITEM_REQUEST, createLocaleItem),
    takeLatest(LocaleItemTypes.UPDATE_LOCALE_ITEM_REQUEST, updateLocaleItem),
    takeLatest(LocaleItemTypes.DELETE_LOCALE_ITEM_REQUEST, deleteLocaleItem),

    takeLatest(SectorsTypes.READ_SECTORS_REQUEST, readSector),
    takeLatest(SectorsTypes.READ_UNIQUE_SECTORS_REQUEST, readUniqueSector),
    takeLatest(SectorsTypes.CREATE_SECTOR_REQUEST, createSector),
    takeLatest(SectorsTypes.UPDATE_SECTOR_REQUEST, updateSector),
    takeLatest(SectorsTypes.DELETE_SECTOR_REQUEST, deleteSector),

    takeLatest(UnitsTypes.READ_UNITS_REQUEST, readUnit),
    takeLatest(UnitsTypes.READ_UNIQUE_UNITS_REQUEST, readUniqueUnit),
    takeLatest(UnitsTypes.CREATE_UNITS_REQUEST, createUnit),
    takeLatest(UnitsTypes.UPDATE_UNITS_REQUEST, updateUnit),
    takeLatest(UnitsTypes.DELETE_UNITS_REQUEST, deleteUnit),

    takeLatest(PatrimonyTypes.READ_PATRIMONY_REQUEST, readPatrimony),
    takeLatest(PatrimonyTypes.CREATE_PATRIMONY_REQUEST, createPatrimony),
    takeLatest(PatrimonyTypes.UPDATE_PATRIMONY_REQUEST, updatePatrimony),
    takeLatest(PatrimonyTypes.DELETE_PATRIMONY_REQUEST, deletePatrimony),
    takeLatest(PatrimonyTypes.DUPLICATE_PATRIMONY_REQUEST, duplicatePatrimony),

    takeLatest(
      LowPatrimony.CREATE_LOW_PATRIMONY_REQUEST,
      createLowItemPatrimony
    ),
    takeLatest(LowPatrimony.READ_LOW_PATRIMONY_REQUEST, readLowItemPatrimony),
    takeLatest(
      LowPatrimony.DELETE_LOW_PATRIMONY_REQUEST,
      deleteLowPatrimonyItem
    ),

    takeLatest(
      TransferencePatrimony.READ_TRANSFERENCE_PATRIMONY_REQUEST,
      readTransferencersPatrimony
    ),
    takeLatest(
      TransferencePatrimony.CREATE_TRANSFERENCE_PATRIMONY_REQUEST,
      createTransferencePatrimony
    ),
    takeLatest(
      TransferencePatrimony.UPDATE_TRANSFERENCE_PATRIMONY_REQUEST,
      updateTransferencePatrimony
    ),
    takeLatest(
      TransferencePatrimony.DELETE_TRANSFERENCE_PATRIMONY_REQUEST,
      deleteTransferencePatrimony
    ),

    takeLatest(
      OccurrencePatrimony.READ_OCCURRENCE_PATRIMONY_REQUEST,
      readOccurrencePatrimony
    ),
    takeLatest(
      OccurrencePatrimony.CREATE_OCCURRENCE_PATRIMONY_REQUEST,
      createOccurrencePatrimony
    ),
    takeLatest(
      OccurrencePatrimony.UPDATE_OCCURRENCE_PATRIMONY_REQUEST,
      updateOccurencePatrimony
    ),

    takeLatest(InvoiceTypes.READ_INVOICE_REQUEST, readInvoice),
    takeLatest(InvoiceTypes.UPLOAD_INVOICE_REQUEST, uploadInvoice),
    takeLatest(InvoiceTypes.DOWNLOAD_INVOICE_REQUEST, downloadInvoice),
    takeLatest(InvoiceTypes.DELETE_INVOICE_REQUEST, deleteInvoice),

    takeLatest(ImagesTypes.READ_IMAGE_REQUEST, readImage),
    takeLatest(ImagesTypes.UPLOAD_IMAGE_REQUEST, uploadImage),
    takeLatest(ImagesTypes.DOWNLOAD_IMAGE_REQUEST, downloadImage),
    takeLatest(ImagesTypes.DELETE_IMAGE_REQUEST, deleteImage),

    takeLatest(
      PrefectureImageTypes.READ_IMAGE_PREFECTURE_REQUEST,
      readImagePrefecture
    ),

    takeLatest(
      PrefectureImageTypes.UPLOAD_IMAGE_PREFECTURE_REQUEST,
      uploadPrefectureImage
    ),

    takeLatest(
      PrefectureImageTypes.UPDATE_IMAGE_PREFECTURE_REQUEST,
      updatePrefectureImage
    ),
  ]);
}
