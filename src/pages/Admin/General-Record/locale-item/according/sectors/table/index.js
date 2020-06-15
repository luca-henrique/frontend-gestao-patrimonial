import React, { useState } from "react";

import MaterialTable from "material-table";

import { Creators as CreatorsUnits } from "~/store/ducks/units";
import { Creators as CreatorsSectors } from "~/store/ducks/sectors";
import { useDispatch, useSelector } from "react-redux";

import { Paper } from "@material-ui/core/";

import CreatePage from "./create";
import UpdatePage from "./update";

export default function Sectors() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = [
    { id: 1, descricao: "DEPARTAMENTO DE OBRAS E INFRA ESTRUTURA" },
    { id: 2, descricao: "DEPARTAMENTO DE SERVIÇOS PUBLICOS PERMANENTE" },
  ];

  const dispatch = useDispatch();

  const visible = useSelector((state) => state.units.units_list.visible);

  const handleShowAccordingUnits = (id) => {
    dispatch(CreatorsUnits.showAccordingUnits(id));
  };

  const handleShowNew = () => {
    dispatch(CreatorsSectors.showNewSector());
  };

  const handleShowUpdate = (data) => {
    dispatch(CreatorsSectors.showUpdateSector(data));
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
            tooltip: "Editar",
            onClick: (event, rowData) => {
              handleShowUpdate(rowData);
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event) => {},
          },

          {
            icon: "visibility",
            hidden: !visible,
            onClick: (event, rowData) => {
              handleShowAccordingUnits(rowData.id);
            },
          },
        ]}
      />
      <CreatePage />
      <UpdatePage />
    </div>
  );
}
