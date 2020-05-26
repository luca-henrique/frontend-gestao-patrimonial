import React from "react";

import Account from "./account/";
import Prefecture from "./prefecture/update/";

/* --> List Item Create [Cadastros Gerais] <-- */

import LowPage from "./list-item-create/low-item/";

import GoodPage from "./list-item-create/good-item/";

import StatePage from "./list-item-create/state-item";

import NaturePage from "./list-item-create/nature-item/";

import OriginPage from "./list-item-create/origin-item/";

import OccurrencePage from "./list-item-create/occurrence-item";

import LocalePage from "./list-item-create/locale-item/index";

/* --> List Item Create [Cadastros Gerais] <-- */

import LogPage from "./log/";

export const Routes = {
  default: <h2>Home</h2>,
  account: <Account />,
  prefecture: <Prefecture />,

  /* [Items] */
  low: <LowPage />,
  good: <GoodPage />,
  state: <StatePage />,
  nature: <NaturePage />,
  origin: <OriginPage />,
  occurrence: <OccurrencePage />,
  locale: <LocalePage />,

  /* [Log] */
  log: <LogPage />,
};
