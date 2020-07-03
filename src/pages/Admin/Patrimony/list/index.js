import React from "react";

import MaterialTable from "material-table";

import { Creators as CreatorsPage } from "~/store/ducks/page";
import { Creators as CreatorsPatrimony } from "~/store/ducks/patrimony";
import { useDispatch } from "react-redux";

import WarningIcon from "@material-ui/icons/Warning";
import Typography from "@material-ui/core/Typography";

function View() {
  const date = new Date().toISOString().slice(0, 10);

  const data = [
    {
      id: 214,
      tipping: 1,
      discrimination: "CHAVE PRT MN PDWM 10,0CV",
      situation: "ativo",
      commit: "okfgoekr",
      buy_date: date,
      invoice: "1565444",
      institution: "SECRETARIA DE SAUDE",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
    {
      id: 332,
      tipping: 1,
      discrimination: "CHAVE PRT MN PDWM 10,0CV",
      situation: "transferido",
      commit: "okfgoekr",
      buy_date: date,
      invoice: "1565444",
      institution: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
    {
      id: 5456,
      tipping: 1,
      discrimination: "CHAVE PRT MN PDWM 10,0CV",
      situation: "baixa",
      commit: "okfgoekr",
      buy_date: date,
      invoice: "1565444",
      institution: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
  ];

  const colors = {
    ativo: "#088A08",
    transferido: "#FF8000",
    baixa: "#DF0101",
  };

  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MaterialTable
        data={data}
        title={null}
        columns={[
          {
            title: "Situação",
            field: "situation",
            render: (rowData) => (
              <>
                <WarningIcon style={{ color: colors[rowData.situation] }} />
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
            field: "commit",
          },

          {
            title: "Data da Compra",
            field: "buy_date",
            type: "date",
          },

          {
            title: "Nota fiscal",
            field: "invoice",
          },
          {
            title: "Orgão",
            field: "institution",
          },
          {
            title: "Setor",
            field: "sector",
          },
          {
            title: "Únidade",
            field: "unit",
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
            Situações do patrimônio:
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" style={{ color: colors["ativo"] }}>
            ativo,
          </Typography>
        </div>
        <div>
          <Typography
            variant="subtitle1"
            style={{ color: colors["transferido"] }}
          >
            transferido,
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

export default View;