import React, { useState } from "react";

import MaterialTable from "material-table";

import { Creators as CreatorsPage } from "~/store/ducks/page";

import { useDispatch } from "react-redux";

import WarningIcon from "@material-ui/icons/Warning";

function View() {
  const [selectedRow, setSelectedRow] = useState("");

  const date = new Date().toISOString().slice(0, 10);

  const data = [
    {
      tipping: 1,
      discrimination: "CHAVE PRT MN PDWM 10,0CV",
      situation: true,
      commit: "okfgoekr",
      buy_date: date,
      invoice: "1565444",
      institution: "SECRETARIA DE SAUDE",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
    {
      tipping: 1,
      discrimination: "CHAVE PRT MN PDWM 10,0CV",
      situation: false,
      commit: "okfgoekr",
      buy_date: date,
      invoice: "1565444",
      institution: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <MaterialTable
        data={data}
        title="Patrimônio"
        columns={[
          {
            title: "Situação",
            field: "situation",
            render: (rowData) => (
              <>
                <WarningIcon
                  style={
                    rowData.situation === false
                      ? { color: "#58ACFA" }
                      : { color: "#DF0101" }
                  }
                />
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
        onRowClick={(evt, selectedRow) => {
          setSelectedRow(selectedRow);
        }}
        options={{
          cellStyle: { whiteSpace: "nowrap" },
          headerStyle: {
            color: "#a4a4a4",
            whiteSpace: "nowrap",
          },
          actionsCellStyle: { color: "#a4a4a4" },
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow && selectedRow.tableData.id === rowData.tableData.id
                ? "#58ACFA"
                : "#FFF",
          }),
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
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event) => {},
          },
          {
            icon: "visibility",
            tooltip: "Mostrar informações",
            onClick: (event, rowData) => {
              dispatch(CreatorsPage.changePageLocation("item_patrimony"));
            },
          },

          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {},
          },

          {
            icon: "delete",
            tooltip: "Deletar item",
            onClick: (event, rowData) => {},
          },
        ]}
      />
    </div>
  );
}

export default View;
