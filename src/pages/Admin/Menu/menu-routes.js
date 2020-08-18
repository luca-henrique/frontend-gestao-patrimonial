import React, { lazy, Suspense } from "react";

// Listar todos os itens do patrimonio
import ListPatrimony from "../Patrimony/list";
import CreatePatrimony from "../Patrimony/create";
import UpdatePatrimony from "../Patrimony/update";
import Perfil from "../Account/perfil";

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

import Loader from "~/components/Loader";

const Account = lazy(() => import("../Account/list"));

/* --> List Item Create [Cadastros Gerais] <-- */

const LowPage = lazy(() => import("../General-Record/low-item/list"));

const GoodPage = lazy(() => import("../General-Record/good-item/list"));

const StatePage = lazy(() => import("../General-Record/state-item/list"));

const NaturePage = lazy(() => import("../General-Record/nature-item//list"));

const OriginPage = lazy(() => import("../General-Record/origin-item/list"));

const OccurrencePage = lazy(() =>
  import("../General-Record/occurrence-item/list")
);

const LocalePage = lazy(() => import("../General-Record/locale-item/list"));

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

  if (visible) {
    return <PrefectureCreate />;
  } else {
    return <PrefectureUpdate />;
  }
}

export default () => {
  const pageLocation = useSelector(({ page }) => page.location);

  return <Suspense fallback={<Loader />}>{Routes[pageLocation]}</Suspense>;
};

const Routes = {
  default: <Start />,
  account: <Account />,
  prefecture: <Prefecture />,
  perfil: <Perfil />,

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
