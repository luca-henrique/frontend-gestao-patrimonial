import React, { useState } from "react";

import MaterialTable from "material-table";

import { Lock, LockOpenOutlined } from "@material-ui/icons/";

import { useDispatch } from "react-redux";

function View() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = [
    { id: 1, nome: "Lucas", email: "lukas.paes18@gmail.com", admin: true },
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <MaterialTable
        data={data}
        title="Patrimônio"
        style={{ width: "2500px" }}
        columns={[
          {
            title: "Codigo",
            field: "id",
          },
          {
            title: "Data Entrada",
            field: "entry_date",
            type: "date",
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
            title: "Situação",
            field: "situation",
          },
          {
            title: "Natureza",
            field: "nature",
          },
          {
            title: "Tipo do bem",
            field: "good",
          },
          {
            title: "Empenho",
            field: "commit",
          },
          {
            title: "Data de compra",
            field: "buy_date",
            type: "date",
          },
          {
            title: "Licitação",
            field: "email",
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
          headerStyle: {
            color: "#a4a4a4",
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
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {},
          },
          {
            icon: "lock",
            tooltip: "Alterar senha",
            onClick: (event, rowData) => {},
          },
          {
            icon: "delete",
            tooltip: "Deletar conta",
            onClick: (event, rowData) => {},
          },
        ]}
      />
    </div>
  );
}

export default View;
