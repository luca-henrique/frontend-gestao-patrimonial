import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsUnits } from "~/store/ducks/units";

import MaterialTable from "material-table";
import { Paper } from "@material-ui/core/";

export default function Units() {
  const [selectedRow, setSelectedRow] = useState("");

  const data = useSelector((state) => state.units.units);

  const loading = useSelector((state) => state.units.loading_units);

  const dispatch = useDispatch();

  const handleShowNew = () => {
    dispatch(CreatorsUnits.showNewUnits());
  };

  const handleShowUpdate = (data) => {
    dispatch(CreatorsUnits.showUpdateUnits(data));
  };

  const id = useSelector((state) => state.units.units_list.id_sector);
  const visible_unit = useSelector((state) => state.units.units_list.visible);

  useEffect(() => {
    if (!visible_unit) {
      dispatch(CreatorsUnits.readUnitRequest(id));
    }
  }, [dispatch, id, visible_unit]);

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
            field: "description",
          },
          {
            title: "Responsavel",
            field: "responsible",
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
            tooltip: "Editar informações",
            onClick: (event, rowData) => {
              handleShowUpdate(rowData);
            },
          },

          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => {
              dispatch(CreatorsUnits.deleteUnitRequest(rowData.id));
            },
          },
        ]}
      />
    </div>
  );
}
