import React, { useState } from "react";

import { Modal } from "@material-ui/core/";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

import { Creators as CreatorsTransfer } from "~/store/ducks/transference-patrimony-item";
import { useSelector, useDispatch } from "react-redux";

import Create from "../create/";
import Update from "../update/";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100% ",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  },
}));

const View = () => {
  const date = new Date().toISOString().slice(0, 10);

  const [state] = useState({
    columns: [
      {
        title: "Data",
        field: "date",
        type: "date",
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
    ],
  });

  const classes = useStyles();

  const data = [
    {
      id: 1,
      date: date,
      institution: "SECRETARIA DE SAUDE",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
    {
      id: 2343,
      date: date,
      institution: "SECRETARIA DE SAUDE",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
    {
      id: 2342,
      date: date,
      institution: "SECRETARIA DE SAUDE",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
    {
      id: 34,
      date: date,
      institution: "SECRETARIA DE SAUDE",
      sector: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
      unit: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS",
    },
  ];

  const visible = useSelector(
    (state) =>
      state.transfer_patrimony_item.show_modal_list_transference_patrimony
        .visible
  );

  const id_patrimony = useSelector(
    (state) =>
      state.transfer_patrimony_item.show_modal_list_transference_patrimony
        .id_patrimony
  );

  const dispatch = useDispatch();

  return (
    <Modal
      open={visible}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "visible",
        overflowY: "scroll",
      }}
    >
      <div className={classes.modal}>
        <MaterialTable
          title="Transferências"
          columns={state.columns}
          data={data}
          options={{
            actionsCellStyle: { color: "#848484" },
            headerStyle: {
              color: "#a4a4a4",
              whiteSpace: "nowrap",
            },
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
              tooltip: "Transferir patrimônio",
              isFreeAction: true,
              onClick: (event, rowData) => {
                dispatch(
                  CreatorsTransfer.showModalCreateTransferencePatrimony(
                    id_patrimony
                  )
                );
              },
            },

            {
              icon: "printer",
              tooltip: "Gerar PDF",
              isFreeAction: true,
              onClick: (event, rowData) => {},
            },

            {
              icon: "close",
              tooltip: "Fechar",
              isFreeAction: true,
              onClick: (event, rowData) => {
                dispatch(CreatorsTransfer.hideModalListTransferencePatrimony());
              },
            },

            {
              icon: "delete",
              tooltip: "Excluir",
              onClick: (event, rowData) => {},
            },
            {
              icon: "edit",
              tooltip: "Editar",
              onClick: (event, rowData) => {
                dispatch(
                  CreatorsTransfer.showModalUpdateTransferencePatrimony(rowData)
                );
              },
            },
          ]}
        />

        <Create />
        <Update />
      </div>
    </Modal>
  );
};

export default View;
