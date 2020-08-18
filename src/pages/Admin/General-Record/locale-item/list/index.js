import React, { useState } from "react";

import { Creators as CreatorsLocaleItem } from "~/store/ducks/locale-item";

import { Creators as CreatorsSectors } from "~/store/ducks/sectors";
import { useDispatch, useSelector } from "react-redux";

import MaterialTable from "material-table";

import AccordingSectors from "./according/sectors/";
import AccordingUnits from "./according/units/";

export default function LocalItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const data = [
    { id: 1, nome: "SECRETARIA DE ADMINISTRAÇÃO" },
    { id: 2, nome: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS" },
  ];

  const visible = useSelector((state) => state.sectors.sectors_list.visible);

  const handleShowAccordingSectors = (id) => {
    dispatch(CreatorsSectors.showAccordingSectors(id));
  };

  const handleShowNewLocaleItem = () => {
    dispatch(CreatorsLocaleItem.showNewLocaleItem());
  };

  const handleShowUpdateLocaleItem = (data) => {
    dispatch(CreatorsLocaleItem.showUpdateLocaleItem(data));
  };

  const dispatch = useDispatch();
  return (
    <div>
      <MaterialTable
        style={{ boxShadow: "#fff" }}
        data={data}
        title="Localidades"
        columns={[
          {
            title: "Código",
            field: "id",
          },
          {
            title: "Descrição",
            field: "nome",
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
            tooltip: "Cadastrar uma nova localidade.",
            isFreeAction: true,
            onClick: (event) => {
              handleShowNewLocaleItem();
            },
          },

          {
            icon: "edit",
            tooltip: "Editar informações.",
            onClick: (event, rowData) => {
              handleShowUpdateLocaleItem(rowData);
            },
          },
          {
            icon: "delete",
            tooltip: "Excluir",
            onClick: (event, rowData) => {
              dispatch(CreatorsLocaleItem.deleteLocaleItemRequest(rowData.id));
            },
          },

          {
            icon: "visibility",
            hidden: !visible,
            tooltip: "Mostrar setores.",
            onClick: (event, rowData) => {
              handleShowAccordingSectors(rowData.id);
            },
          },
        ]}
      />

      <AccordingSectors />
      <AccordingUnits />
    </div>
  );
}
