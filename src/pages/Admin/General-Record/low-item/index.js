import React, { useState } from "react";

import MaterialTable from "material-table";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsLowItem } from "~/store/ducks/low-item";

import Create from "./create/";
import Update from "./update/";

function LowItem() {
  const [selectedRow, setSelectedRow] = useState("");

  const lowItems = useSelector((state) => state.low.low_items);

  const dispatch = useDispatch();
  return (
    <div>
      <MaterialTable
        data={lowItems}
        title="Baixa"
        columns={[
          {
            title: "Código",
            field: "id",
          },
          {
            title: "Descrição",
            field: "description",
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
            onClick: (event, rowData) => {
              dispatch(CreatorsLowItem.deleteLowItemRequest(rowData.id));
            },
          },
        ]}
      />
      <Create />
      <Update />
    </div>
  );
}

export default LowItem;
