import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsOccurrenceItem } from "~/store/ducks/occurrence-item";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "500px ",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

function OcurrenceItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const data = useSelector((state) => state.occurrence.occurrence_items);

  const loading = useSelector(
    (state) => state.occurrence.loading_occurrence_items
  );

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(CreatorsOccurrenceItem.readTesteOccurrenceItemRequest());
  }, [dispatch]);

  return (
    <div className={classes.modal}>
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
