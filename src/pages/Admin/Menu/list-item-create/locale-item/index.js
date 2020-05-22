import React, { useState } from "react";

import { Creators as CreatorsLocaleItem } from "~/store/ducks/locale-item";
import { Creators as CreatorsSectors } from "~/store/ducks/sectors";
import { useDispatch, useSelector } from "react-redux";

import MaterialTable from "material-table";
import AccordingSectors from "./according/sectors/";
import AccordingUnits from "./according/units/";

import VisibilityIcon from "@material-ui/icons/Visibility";

export default function LocalItem() {
  const [selectedRow, setSelectedRow] = useState("");
  const data = [
    { id: 1, nome: "SECRETARIA DE ADMINISTRAÇÃO" },
    { id: 2, nome: "SECRETARIA DE INFRA ESTRUTURA E SERVIÇOS PUBLICOS" },
  ];

  const visible = useSelector((state) => state.sectors.sectors_list.visible);

  const id_institution = useSelector(
    (state) => state.sectors.sectors_list.id_institution
  );

  const handleShowAccordingSectors = (id) => {
    console.log(id);
    console.log(id_institution);
    if (visible === true) {
      dispatch(CreatorsSectors.showAccordingSectors(id));
    } else {
      if (id_institution === id) {
        dispatch(CreatorsSectors.hideAccordingSectors());
      }
    }
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
      />
      <AccordingSectors />

      <AccordingUnits />
    </div>
  );
}

/**
 

   actions={[
          {
            icon: "add",
            tooltip: "Cadastrar",
            isFreeAction: true,
            onClick: (event) => {},
          },

          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {},
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {},
          },
          {
            icon: "visibility",
            tooltip: "Mostrar Setores",
            onClick: (event, rowData) => {
              handleShowAccordingSectors(rowData.id);
            },
          },
        ]}


 */

/*
 
 
  detailPanel={[
          {
            icon: "edit",
            tooltip: "Editar informações",
            onClick: (event, rowData) => {},
            render: (rowData) => {
              return <div />;
            },
          },
          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {},
            render: (rowData) => {
              return <div />;
            },
          },
          {
            icon: (rowData) => (
              <VisibilityIcon
                onClick={() => {
                  console.log(rowData);
                  handleShowAccordingSectors(rowData.id);
                }}
              />
            ),
            openIcon: () => <VisibilityIcon style={{ color: "#0080FF" }} />,
            tooltip: "Setores",
            render: (rowData) => {
              return <div onClick={() => console.log("dokw")} />;
            },
          },
        ]}
 
 
 
 
 */
