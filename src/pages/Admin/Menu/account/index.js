import React, { useState } from "react";

import MaterialTable from "material-table";

import { Lock, LockOpenOutlined } from "@material-ui/icons/";

import Create from "./components/create/";

import { useDispatch } from "react-redux";
import { Creators as CreatorsAccount } from "../../../../store/ducks/account";

function View() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = [
    { id: 1, nome: "Lucas", email: "lukas.paes18@gmail.com", admin: true },
  ];

  const dispatch = useDispatch();

  return (
    <>
      <MaterialTable
        data={data}
        title="Contas"
        columns={[
          {
            title: "Código",
            field: "id",
          },
          {
            title: "Nome",
            field: "nome",
          },
          {
            title: "E-mail",
            field: "email",
          },

          {
            title: "Privilegio",
            field: "admin",
            render: (rowData) => (
              <>{rowData.admin === true ? <LockOpenOutlined /> : <Lock />}</>
            ),
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
            onClick: (event) => {
              dispatch(CreatorsAccount.showNewAccount());
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar funcionario",
            onClick: (event, rowData) => {},
          },
        ]}
      />
    </>
  );
}

export default View;
