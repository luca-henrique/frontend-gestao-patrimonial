import React, { useState } from "react";

import MaterialTable from "material-table";

import { useDispatch } from "react-redux";
import { Creators as CreatorsNatureItem } from "~/store/ducks/nature-item";

import Create from "./create/";
import Update from "./update/";

function GoodItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const data = [{ id: 1, descricao: "Maquinas", depreciacao: "10%" }];

  const dispatch = useDispatch();
  return (
    <div>
      <MaterialTable
        data={data}
        title="Natureza"
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
            title: "Depreciação",
            field: "depreciacao",
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
      <Create />
      <Update />
    </div>
  );
}

export default GoodItem;
