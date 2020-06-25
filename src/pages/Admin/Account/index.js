import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { Lock, LockOpenOutlined } from "@material-ui/icons/";

import Create from "./components/create/";
import Update from "./components/update/";
import Password from "./components/change-password/";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsAccount } from "~/store/ducks/account";

import { store } from "~/store/index";
import ws from "~/service/socket";

function View() {
  const [selectedRow, setSelectedRow] = useState("");
  const dispatch = useDispatch();

  const account = ws.getSubscription("user") || ws.subscribe("user");

  const data = useSelector((state) => state.account.read_accounts);

  useEffect(() => {}, [data]);

  account.on("newUser", async (account) => {
    let newArray = [...data, account];
    store.dispatch({
      type: "@account/READ_ACCOUNT_SUCCESS",
      payload: {
        accounts: await newArray,
      },
    });
  });

  account.on("deleteUser", async (account) => {
    var lists = await data.filter((x) => {
      return x.id !== account.id;
    });
    store.dispatch({
      type: "@account/READ_ACCOUNT_SUCCESS",
      payload: {
        accounts: lists,
      },
    });
  });

  account.on("updateUser", async (account) => {
    const users = [];

    data.map((user) => {
      if (user.id !== account.id) {
        users.push(user);
      } else {
        users.push(account);
      }
    });

    store.dispatch({
      type: "@account/READ_ACCOUNT_SUCCESS",
      payload: {
        accounts: users,
      },
    });
  });

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
