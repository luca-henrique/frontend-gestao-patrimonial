import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsOccurrenceItem } from "~/store/ducks/occurrence-item";

function OcurrenceItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const data = useSelector((state) => state.occurrence.occurrence_items);

  const loading = useSelector(
    (state) => state.occurrence.loading_occurrence_items
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsOccurrenceItem.readTesteOccurrenceItemRequest());
  }, [dispatch]);

  return (
    <div>
      <MaterialTable
        data={data}
        title="Ocorrência"
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
              dispatch(CreatorsOccurrenceItem.showNewOccurrenceItem());
            },
          },

          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {
              dispatch(
                CreatorsOccurrenceItem.showUpdateOccurrenceItem(rowData)
              );
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {
              dispatch(
                CreatorsOccurrenceItem.deleteOccurrenceItemRequest(rowData.id)
              );
            },
          },
        ]}
      />
    </div>
  );
}

export default OcurrenceItem;
