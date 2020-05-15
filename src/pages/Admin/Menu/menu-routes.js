import React from "react";

import Account from "./account/";
import Prefecture from "./prefecture/update/";

/* --> List Item Create [Cadastros Gerais] <-- */

import LowPage from "./list-item-create/low-item/";
import GoodPage from "./list-item-create/good-item/";
import LocalePage from "./list-item-create/locale-item/";

/* --> List Item Create [Cadastros Gerais] <-- */

export const Routes = {
  default: <h2>Home</h2>,
  account: <Account />,
  prefecture: <Prefecture />,
  low: <LowPage />,
  good: <GoodPage />,
  locale: <LocalePage />,
};
