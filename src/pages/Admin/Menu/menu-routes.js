import React from "react";

import Account from "../Account/";

// Listar todos os itens do patrimonio
import ListPatrimony from "../Patrimony/list";
import CreatePatrimony from "../Patrimony/create";
import UpdatePatrimony from "../Patrimony/update";

/* --> List Item Create [Cadastros Gerais] <-- */

import LowPage from "../General-Record/low-item/";

import GoodPage from "../General-Record/good-item/";

import StatePage from "../General-Record/state-item";

import NaturePage from "../General-Record/nature-item/";

import OriginPage from "../General-Record/origin-item/";

import OccurrencePage from "../General-Record/occurrence-item";

import LocalePage from "../General-Record/locale-item/index";

/* --> Log [Alterações feitas no sistema] <-- */

import LogPage from "../Log/";

/* --> Gerar [Relatorio] <-- */

import GeneralPatrimonyReport from "../Reports/patrimony/general";

import DepreciationPatrimonyReport from "../Reports/patrimony/depreciation";

import TippingPatrimonyReport from "../Reports/patrimony/tipping";

import InvetoryReport from "../Reports/inventory/";

import StatementResponsibilityReport from "../Reports/statement-responsibility";

import TransferReport from "../Reports/transfer";

import { useSelector } from "react-redux";

import PrefectureCreate from "../Prefecture/create/";
import PrefectureUpdate from "../Prefecture/update/";

function Start() {
  const visible = useSelector((state) => state.prefecture.create_prefecture);
  console.log(visible);
  if (visible) {
    return <PrefectureCreate />;
  } else {
    return <h1>Home</h1>;
  }
}

function Prefecture() {
  const visible = useSelector((state) => state.prefecture.create_prefecture);
  console.log(visible);

  if (visible) {
    return <PrefectureCreate />;
  } else {
    return <PrefectureUpdate />;
  }
}

export const Routes = {
  default: <Start />,
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
