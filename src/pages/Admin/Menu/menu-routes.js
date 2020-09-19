import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import Loader from "~/components/Loader";

// Listar todos os itens do patrimonio
import ListPatrimony from "../Patrimony/list";
import CreatePatrimony from "../Patrimony/create";
import UpdatePatrimony from "../Patrimony/update";
import Perfil from "../Account/perfil";

/* --> Log [Alterações feitas no sistema] <-- */

import LogPage from "../Log/";

/* --> Gerar [Relatorio] <-- */

const GeneralPatrimonyReport = lazy(() =>
  import("../Reports/patrimony/general")
);

const DepreciationPatrimonyReport = lazy(() =>
  import("../Reports/patrimony/depreciation")
);

const TippingPatrimonyReport = lazy(() =>
  import("../Reports/patrimony/tipping")
);

const InvetoryReport = lazy(() => import("../Reports/inventory/"));

const StatementResponsibilityReport = lazy(() =>
  import("../Reports/statement-responsibility")
);

const TransferReport = lazy(() => import("../Reports/transfer"));

const PrefectureCreate = lazy(() => import("../Prefecture/create/"));
const PrefectureUpdate = lazy(() => import("../Prefecture/update/"));

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
  const exist = useSelector((state) => state.prefecture.exist);

  if (exist) {
    return <h3>Home</h3>;
  } else {
    return <PrefectureCreate />;
  }
}

function Prefecture() {
  const exist = useSelector((state) => state.prefecture.exist);

  if (exist) {
    return <PrefectureUpdate />;
  } else {
    return <PrefectureCreate />;
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
