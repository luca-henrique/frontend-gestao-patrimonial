import React, { useState } from "react";

import MaterialTable from "material-table";
import { Lock, LockOpenOutlined } from "@material-ui/icons/";

import Create from "./components/create/";
import Update from "./components/update/";
import Password from "./components/change-password/";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsAccount } from "~/store/ducks/account";

function View() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = useSelector((state) => state.account.read_accounts);
  console.log(data);

  const dispatch = useDispatch();

  return (
    <div>
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
            field: "role",
            render: (rowData) => (
              <>
                {rowData.admin === true ? (
                  <LockOpenOutlined style={{ color: "#a4a4a4" }} />
                ) : (
                  <Lock style={{ color: "#a4a4a4" }} />
                )}
              </>
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
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {
              dispatch(CreatorsAccount.showUpdateAccount(rowData));
            },
          },
          {
            icon: "lock",
            tooltip: "Alterar senha",
            isFreeAction: true,
            onClick: (event, rowData) => {
              dispatch(CreatorsAccount.showChangePasswordAccount());
            },
          },
          {
            icon: "delete",
            tooltip: "Deletar conta",
            onClick: (event, rowData) => {
              dispatch(CreatorsAccount.deleteAccountRequest(rowData.id));
            },
          },
        ]}
      />
      <Create />
      <Update />
      <Password />
    </div>
  );
}

export default View;
