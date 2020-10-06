import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { Lock, LockOpenOutlined } from "@material-ui/icons/";
import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsAccount } from "~/store/ducks/account";

import "./style.css";

const Index = () => {
  const [selectedRow, setSelectedRow] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.account.read_accounts);

  useEffect(() => {
    dispatch(CreatorsAccount.readAccountRequest());
  }, [dispatch]);

  const account = useSelector((state) => state.account.account_joined);

  const actions = [
    {
      icon: "add",
      tooltip: "Adicionar novo usuário",
      isFreeAction: true,
      onClick: (event) => {
        dispatch(CreatorsAccount.showNewAccount());
      },
    },
    {
      icon: "edit",
      tooltip: "Editar informações do usuário",
      onClick: (event, rowData) => {
        dispatch(CreatorsAccount.showUpdateAccount(rowData));
      },
    },

    {
      icon: "delete",
      tooltip: "Deletar usuário",
      onClick: (event, rowData) => {
        dispatch(CreatorsAccount.deleteAccountRequest(rowData.id));
      },
    },
  ];

  return (
    <MaterialTable
      data={data}
      title="Usuários"
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
              {rowData.role === true ? (
                <LockOpenOutlined style={{ color: "#0080FF" }} />
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
        cellStyle: { whiteSpace: "nowrap" },
        headerStyle: {
          color: "#a4a4a4",
          whiteSpace: "nowrap",
        },
        actionsCellStyle: { color: "#a4a4a4" },
        rowStyle: (rowData) => ({
          backgroundColor:
            selectedRow && selectedRow.tableData.id === rowData.tableData.id
              ? "rgba(164, 164, 164,0.2)"
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
      actions={account.role ? actions : []}
    />
  );
};

export default Index;
