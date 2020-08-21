import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsOriginItem } from "~/store/ducks/origin-item";

function GoodItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.origin.origin_items);
  const loading = useSelector((state) => state.origin.origin_items);

  useEffect(() => {
    dispatch(CreatorsOriginItem.readOriginItemRequest());
  }, [dispatch]);

  return (
    <div>
      <MaterialTable
        data={data}
        title="Origem"
        loading={loading}
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
              dispatch(CreatorsOriginItem.showNewOriginItem());
            },
          },

          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {
              dispatch(CreatorsOriginItem.showUpdateOriginItem(rowData));
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {
              dispatch(CreatorsOriginItem.deleteOriginItemRequest(rowData.id));
            },
          },
        ]}
      />
    </div>
  );
}

export default GoodItem;
