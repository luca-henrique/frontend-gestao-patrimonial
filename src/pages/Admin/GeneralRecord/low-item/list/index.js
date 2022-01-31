import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsLowItem } from "~/store/ducks/low-item";

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

function LowItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsLowItem.readLowItemRequest());
  }, [dispatch]);

  const lowItems = useSelector((state) => state.low.low_items);
  const loading = useSelector((state) => state.low.loading_low_items);

  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <MaterialTable
        data={lowItems}
        loading={loading}
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
    </div>
  );
}

export default LowItem;
