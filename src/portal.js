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
    </Suspense>
  );
};

const create = (Component) =>
  ReactDOM.createPortal(Component, document.getElementById("modal"));

export default Main;
