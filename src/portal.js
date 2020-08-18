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

const Main = () => {
  const ChangerPassword = () => create(<ChangerPasswordModal />);
  const CreateAccount = () => create(<CreateAccountModal />);
  const UpdateAccount = () => create(<UpdateAccountModal />);

  const CreateLowItem = () => create(<CreateLowItemModal />);
  const UpdateLowItem = () => create(<UpdateLowItemModal />);

  return (
    <Suspense fallback={<Loader />}>
      <ChangerPassword />
      <CreateAccount />
      <UpdateAccount />

      <CreateLowItem />
      <UpdateLowItem />
    </Suspense>
  );
};

const create = (Component) =>
  ReactDOM.createPortal(Component, document.getElementById("modal"));

export default Main;
