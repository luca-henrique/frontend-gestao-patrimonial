import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import Loader from "./components/Loader";

const ChangerPasswordModal = lazy(() =>
  import("./pages/Admin/Account/change-password")
);
const CreateAccountModal = lazy(() => import("./pages/Admin/Account/create"));
const UpdateAccountModal = lazy(() => import("./pages/Admin/Account/update"));

const CreateLowItemModal = lazy(() =>
  import("./pages/Admin/General-Record/low-item/create")
);

const UpdateLowItemModal = lazy(() =>
  import("./pages/Admin/General-Record/low-item/update")
);

const CreateGoodItemModal = lazy(() =>
  import("./pages/Admin/General-Record/good-item/create")
);
const UpdateGoodItemModal = lazy(() =>
  import("./pages/Admin/General-Record/good-item/update")
);

const CreateStateItemModal = lazy(() =>
  import("./pages/Admin/General-Record/state-item/create")
);
const UpdateStateItemModal = lazy(() =>
  import("./pages/Admin/General-Record/state-item/update")
);

const CreateNatureItemModal = lazy(() =>
  import("./pages/Admin/General-Record/nature-item/create")
);
const UpdateNatureItemModal = lazy(() =>
  import("./pages/Admin/General-Record/nature-item/update")
);

const CreateOriginItemModal = lazy(() =>
  import("./pages/Admin/General-Record/origin-item/create")
);
const UpdateOriginItemModal = lazy(() =>
  import("./pages/Admin/General-Record/origin-item/update")
);

const CreateOccurrenceItemModal = lazy(() =>
  import("./pages/Admin/General-Record/occurrence-item/create")
);
const UpdateOccurrenceItemModal = lazy(() =>
  import("./pages/Admin/General-Record/occurrence-item/update")
);

const CreateLocaleItemModal = lazy(() =>
  import("./pages/Admin/General-Record/locale-item/create")
);
const UpdateLocaleItemModal = lazy(() =>
  import("./pages/Admin/General-Record/locale-item/update")
);

const CreateSectorModal = lazy(() =>
  import("./pages/Admin/General-Record/sectors/table/create")
);
const UpdateSectorModal = lazy(() =>
  import("./pages/Admin/General-Record/sectors/table/update")
);

const CreateUnitModal = lazy(() =>
  import("./pages/Admin/General-Record/units/table/create")
);
const UpdateUnitModal = lazy(() =>
  import("./pages/Admin/General-Record/units/table/update")
);

const CreateLowItemPatrimonyModal = lazy(() =>
  import("./pages/Admin/Patrimony/update/components/modal-low/create")
);

const RemoveLowItemPatrimonyModal = lazy(() =>
  import("./pages/Admin/Patrimony/update/components/modal-low/remove")
);

const CreateOccurrenceItemPatrimonyModal = lazy(() =>
  import("./pages/Admin/Patrimony/update/components/modal-occurrence/create")
);
const UpdateOccurrenceItemPatrimonyModal = lazy(() =>
  import("./pages/Admin/Patrimony/update/components/modal-occurrence/update")
);

const DialogRemoveLowPatrimony = lazy(() =>
  import("./pages/Admin/Patrimony/update/components/low-remove-confirmation/")
);

const ListTransferenceModal = lazy(() =>
  import("./pages/Admin/Patrimony/update/components/modal-transfer/list")
);
const CreateTransferenceModal = lazy(() =>
  import("./pages/Admin/Patrimony/update/components/modal-transfer/create")
);
const UpdateTransferenceModal = lazy(() =>
  import("./pages/Admin/Patrimony/update/components/modal-transfer/update")
);

const Main = () => {
  const ChangerPassword = () => create(<ChangerPasswordModal />);
  const CreateAccount = () => create(<CreateAccountModal />);
  const UpdateAccount = () => create(<UpdateAccountModal />);

  const CreateLowItem = () => create(<CreateLowItemModal />);
  const UpdateLowItem = () => create(<UpdateLowItemModal />);

  const CreateGoodItem = () => create(<CreateGoodItemModal />);
  const UpdateGoodItem = () => create(<UpdateGoodItemModal />);

  const CreateStateItem = () => create(<CreateStateItemModal />);
  const UpdateStateItem = () => create(<UpdateStateItemModal />);

  const CreateNatureItem = () => create(<CreateNatureItemModal />);
  const UpdateNatureItem = () => create(<UpdateNatureItemModal />);

  const CreateOriginItem = () => create(<CreateOriginItemModal />);
  const UpdateOriginItem = () => create(<UpdateOriginItemModal />);

  const CreateOccurrenceItem = () => create(<CreateOccurrenceItemModal />);
  const UpdateOccurrenceItem = () => create(<UpdateOccurrenceItemModal />);

  const CreateLocalItem = () => create(<CreateLocaleItemModal />);
  const UpdateLocalItem = () => create(<UpdateLocaleItemModal />);

  const CreateSector = () => create(<CreateSectorModal />);
  const UpdateSector = () => create(<UpdateSectorModal />);

  const CreateUnit = () => create(<CreateUnitModal />);
  const UpdateUnit = () => create(<UpdateUnitModal />);

  const CreateLowItemPatrimony = () => create(<CreateLowItemPatrimonyModal />);
  const RemoveLowItemPatrimony = () => create(<RemoveLowItemPatrimonyModal />);

  const CreateOccurrenceItemPatrimony = () =>
    create(<CreateOccurrenceItemPatrimonyModal />);
  const RemoveOccurrenceItemPatrimony = () =>
    create(<UpdateOccurrenceItemPatrimonyModal />);

  const RemoveLowPatrimony = () => create(<DialogRemoveLowPatrimony />);

  const ListTransfers = () => create(<ListTransferenceModal />);
  const CreateTransfers = () => create(<CreateTransferenceModal />);
  const UpdateTransfers = () => create(<UpdateTransferenceModal />);

  return (
    <Suspense fallback={<Loader />}>
      <ChangerPassword />
      <CreateAccount />
      <UpdateAccount />

      <CreateLowItem />
      <UpdateLowItem />

      <CreateGoodItem />
      <UpdateGoodItem />

      <CreateStateItem />
      <UpdateStateItem />

      <CreateNatureItem />
      <UpdateNatureItem />

      <CreateOriginItem />
      <UpdateOriginItem />

      <CreateOccurrenceItem />
      <UpdateOccurrenceItem />

      <CreateLocalItem />
      <UpdateLocalItem />

      <CreateSector />
      <UpdateSector />

      <CreateUnit />
      <UpdateUnit />

      <CreateLowItemPatrimony />
      <RemoveLowItemPatrimony />

      <CreateOccurrenceItemPatrimony />
      <RemoveOccurrenceItemPatrimony />

      <RemoveLowPatrimony />

      <ListTransfers />
      <CreateTransfers />
      <UpdateTransfers />
    </Suspense>
  );
};

const create = (Component) =>
  ReactDOM.createPortal(Component, document.getElementById("modal"));

export default Main;
