import React, { useEffect, memo } from "react";

import MaterialTable from "material-table";

import { Creators as CreatorsPage } from "~/store/ducks/page";
import { Creators as CreatorsPatrimony } from "~/store/ducks/patrimony";
import { useDispatch, useSelector } from "react-redux";

import WarningIcon from "@material-ui/icons/Warning";
import Typography from "@material-ui/core/Typography";

function View() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.patrimony_item.patrimonies);
  const loading = useSelector(
    (state) => state.patrimony_item.loading_patrimony
  );

  useEffect(() => {
    dispatch(CreatorsPatrimony.readPatrimonyRequest());
  }, [dispatch]);

  const colors = {
    ativo: "#0080FF",
    transferido: "#FF8000",
    baixa: "#DF0101",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MaterialTable
        data={data}
        title={null}
        loading={loading}
        columns={[
          {
            title: "Situação",
            field: "situation",
            render: (rowData) => (
              <>
                {rowData.situation === true ? (
                  <WarningIcon style={{ color: "#DF0101" }} />
                ) : (
                  <WarningIcon style={{ color: "#0080FF" }} />
                )}
              </>
            ),
          },
          {
            title: "Tombamento",
            field: "tipping",
          },
          {
            title: "Discriminação",
            field: "discrimination",
          },

          {
            title: "Empenho",
            field: "effort",
          },

          {
            title: "Data da Compra",
            field: "dateBuy",
            type: "date",
          },

          {
            title: "Nota fiscal",
            field: "numberInvoice",
          },
          {
            title: "Orgão",
            field: "local.description",
          },
          {
            title: "Setor",
            field: "sector.description",
          },
          {
            title: "Únidade",
            field: "unit.description",
          },
        ]}
        options={{
          cellStyle: { whiteSpace: "nowrap" },
          headerStyle: {
            color: "#a4a4a4",
            whiteSpace: "nowrap",
          },
          actionsCellStyle: { color: "#a4a4a4" },

          searchFieldAlignment: "left",
          toolbarButtonAlignment: "left",
          searchFieldStyle: { width: "350px" },
        }}
        localization={{
          header: {
            actions: "Ações",
          },

          body: {
            emptyDataSourceMessage: "Não existe",
            filterRow: {
              filterTooltip: "Procurar",
            },
          },
          toolbar: {
            searchTooltip: "Procurar",
            searchPlaceholder: "Procurar",
          },
        }}
        actions={[
          {
            icon: "add",
            tooltip: "Adicionar patrimônio",
            isFreeAction: true,
            onClick: (event, rowData) => {
              dispatch(CreatorsPage.changePageLocation("patrimony_create"));
            },
          },
          {
            icon: "visibility",
            tooltip: "Mostrar informações",
            onClick: (event, rowData) => {
              dispatch(CreatorsPage.changePageLocation("patrimony_update"));
              dispatch(CreatorsPatrimony.showPatrimony(rowData));
            },
          },
        ]}
      />
      <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
        <div>
          <Typography variant="subtitle1" color="initial">
            Situações:
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" style={{ color: colors["ativo"] }}>
            ativo,
          </Typography>
        </div>

        <div>
          <Typography variant="subtitle1" style={{ color: colors["baixa"] }}>
            baixa
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default memo(View);
