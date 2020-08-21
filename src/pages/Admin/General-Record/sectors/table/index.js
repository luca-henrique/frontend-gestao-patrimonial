import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

import { Creators as CreatorsUnits } from "~/store/ducks/units";
import { Creators as CreatorsSectors } from "~/store/ducks/sectors";
import { useDispatch, useSelector } from "react-redux";

import { Paper } from "@material-ui/core/";

export default function Sectors() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = useSelector((state) => state.sectors.sectors);
  const loading = useSelector((state) => state.sectors.loading);

  const dispatch = useDispatch();

  const visible = useSelector((state) => state.units.units_list.visible);

  const id = useSelector((state) => state.sectors.sectors_list.id_institution);

  console.log(id);

  const handleShowAccordingUnits = (id) => {
    dispatch(CreatorsUnits.showAccordingUnits(id));
  };

  const handleShowNew = () => {
    dispatch(CreatorsSectors.showNewSector());
  };

  const handleShowUpdate = (data) => {
    dispatch(CreatorsSectors.showUpdateSector(data));
  };

  useEffect(() => {
    //dispatch(CreatorsSectors.readSectorsRequest(id));
  }, [dispatch]);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        data={data}
        title={null}
        loading={loading}
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
        }}
        columns={[
          {
            title: "Código",
            field: "id",
          },
          {
            title: "Descrição",
            field: "descricao",
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
              handleShowNew();
            },
          },

          {
            icon: "edit",
            tooltip: "Editar",
            onClick: (event, rowData) => {
              handleShowUpdate(rowData);
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event) => {},
          },

          {
            icon: "visibility",
            hidden: !visible,
            onClick: (event, rowData) => {
              handleShowAccordingUnits(rowData.id);
            },
          },
        ]}
      />
    </div>
  );
}
