import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsNatureItem } from "~/store/ducks/nature-item";

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

function GoodItem() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = useSelector((state) => state.nature.nature_items);

  const loading = useSelector((state) => state.nature.loading_nature_items);

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(CreatorsNatureItem.readNatureItemRequest());
  }, [dispatch]);

  return (
    <div className={classes.modal}>
      <MaterialTable
        data={data}
        title="Natureza"
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
              dispatch(CreatorsNatureItem.showNewNatureItem());
            },
          },

          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {
              dispatch(CreatorsNatureItem.showUpdateNatureItem(rowData));
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {
              dispatch(CreatorsNatureItem.deleteNatureItemRequest(rowData.id));
            },
          },
        ]}
      />
    </div>
  );
}

export default GoodItem;
