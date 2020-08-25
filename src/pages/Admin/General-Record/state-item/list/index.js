import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsStateItem } from "~/store/ducks/state-item";

function StateItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const data = useSelector((state) => state.state.state_items);

  const loading = useSelector((state) => state.state.loading_state_items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsStateItem.readStateItemRequest());
  }, [dispatch]);

  return (
    <div>
      <MaterialTable
        data={data}
        loading={loading}
        title="Estado"
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
              dispatch(CreatorsStateItem.showNewStateItem());
            },
          },

          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {
              dispatch(CreatorsStateItem.showUpdateStateItem(rowData));
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {
              dispatch(CreatorsStateItem.deleteStateItemRequest(rowData.id));
            },
          },
        ]}
      />
    </div>
  );
}

export default StateItem;
