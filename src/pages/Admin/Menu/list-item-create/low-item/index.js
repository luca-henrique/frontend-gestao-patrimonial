import React, { useState } from "react";

import MaterialTable from "material-table";

import { useDispatch } from "react-redux";
import { Creators as CreatorsLowItem } from "../../../../../store/ducks/low-item";

import Create from "./create/";

function LowItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const data = [{ id: 1, descricao: "Depredação" }];

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
              dispatch(CreatorsLowItem.showNewLowItem());
            },
          },

          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {
              dispatch(CreatorsLowItem.showUpdateLowItem(rowData));
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {},
          },
        ]}
      />
      <Create />
    </div>
  );
}

export default LowItem;
