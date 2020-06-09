import React from "react";

import Account from "./account/";

import Prefecture from "./prefecture/update/";

// Listar todos os itens do patrimonio
import ListPatrimony from "../Patrimony/list";
import CreatePatrimony from "../Patrimony/create";
import UpdatePatrimony from "../Patrimony/update";

/* --> List Item Create [Cadastros Gerais] <-- */

import LowPage from "./list-item-create/low-item/";

import GoodPage from "./list-item-create/good-item/";

import StatePage from "./list-item-create/state-item";

import NaturePage from "./list-item-create/nature-item/";

import OriginPage from "./list-item-create/origin-item/";

import OccurrencePage from "./list-item-create/occurrence-item";

import LocalePage from "./list-item-create/locale-item/index";

/* --> Log [Alterações feitas no sistema] <-- */

import LogPage from "./log/";

/* --> Gerar [Relatorio] <-- */

import GeneralPatrimonyReport from "./reports/patrimony/general";

import DepreciationPatrimonyReport from "./reports/patrimony/depreciation";

import TippingPatrimonyReport from "./reports/patrimony/tipping";

import InvetoryReport from "./reports/inventory/";

import StatementResponsibilityReport from "./reports/statement-responsibility";

import TransferReport from "./reports/transfer";

export const Routes = {
  default: <h2>Home</h2>,
  account: <Account />,
  prefecture: <Prefecture />,

  /* [Patrimony] */
  patrimony_list: <ListPatrimony />,
  patrimony_create: <CreatePatrimony />,
  patrimony_update: <UpdatePatrimony />,

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

  /* Patrimony[Reports] */
  general: <GeneralPatrimonyReport />,
  depreciation: <DepreciationPatrimonyReport />,
  tipping: <TippingPatrimonyReport />,

  inventory: <InvetoryReport />,
  statement: <StatementResponsibilityReport />,
  transfer: <TransferReport />,
};
