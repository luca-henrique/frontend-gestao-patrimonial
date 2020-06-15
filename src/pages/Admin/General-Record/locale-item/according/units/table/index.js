import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Creators as CreatorsUnits } from "~/store/ducks/units";

import MaterialTable from "material-table";
import { Paper } from "@material-ui/core/";

import CreatePage from "./create";
import UpdatePage from "./update";

export default function Units() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = [
    {
      id: 1,
      descricao: "DEPARTAMENTO DE OBRAS E INFRA ESTRUTURA",
      responsavel: "Henrique Paes",
    },
    {
      id: 2,
      descricao: "DEPARTAMENTO DE SERVIÇOS PUBLICOS PERMANENTE",
      responsavel: "Lucas Henrique Paes de Carvalho",
    },
  ];

  const dispatch = useDispatch();

  const handleShowNew = () => {
    dispatch(CreatorsUnits.showNewUnits());
  };

  const handleShowUpdate = (data) => {
    dispatch(CreatorsUnits.showUpdateUnits(data));
  };
  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        data={data}
        title={null}
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
        }}
        columns={[
          {
            title: "Código",
            field: "id",
          },
          {
            title: "Descrição",
            field: "descricao",
          },
          {
            title: "Responsavel",
            field: "responsavel",
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
            tooltip: "Cadastrar",
            isFreeAction: true,
            onClick: (event) => {
              handleShowNew();
            },
          },

          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {
              handleShowUpdate(rowData);
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {
              dispatch(CreatorsUnits.deleteUnitRequest(rowData.id));
            },
          },
        ]}
      />
      <CreatePage />
      <UpdatePage />
    </div>
  );
}
