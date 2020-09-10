import React, { useState, useEffect } from "react";

import { Modal } from "@material-ui/core/";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

import { Creators as CreatorsTransfer } from "~/store/ducks/transference-patrimony-item";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      width: "100% ",
      height: "100%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  },
}));

const View = () => {
  const [state] = useState({
    columns: [
      {
        title: "Data da transferência",
        field: "created_at",
        type: "date",
      },
      {
        title: "Orgão anterior",
        field: "old_locale_item.description",
      },
      {
        title: "Setor anterior",
        field: "oldSector.description",
      },
      {
        title: "Únidade anterior",
        field: "oldUnit.description",
      },
      {
        title: "Orgão atual",
        field: "newLocaleItem.description",
      },
      {
        title: "Setor atual",
        field: "newSector.description",
      },
      {
        title: "Unidade atual",
        field: "newUnit.description",
      },
    ],
  });

  const classes = useStyles();

  const data = useSelector(
    (state) => state.transfer_patrimony_item.read_transference_patrimony
  );

  console.log(data);

  const visible = useSelector(
    (state) => state.transfer_patrimony_item.transference_patrimony.visible
  );

  const id_patrimony = useSelector(
    (state) => state.transfer_patrimony_item.transference_patrimony.id_patrimony
  );

  const dispatch = useDispatch();

  const loading_patrimony = useSelector(
    (state) => state.transfer_patrimony_item.loading_transference_patrimony
  );

  useEffect(() => {
    if (visible) {
      dispatch(CreatorsTransfer.readTransfersRequest(id_patrimony));
    }
  }, [dispatch, id_patrimony, visible]);

  return (
    <Modal
      open={visible}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "visible",
        overflowY: "scroll",
      }}
    >
      <div className={classes.modal}>
        <MaterialTable
          title="Transferências"
          columns={state.columns}
          data={data}
          loading={loading_patrimony}
          options={{
            actionsCellStyle: { color: "#848484" },
            headerStyle: {
              color: "#a4a4a4",
              whiteSpace: "nowrap",
            },
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
              tooltip: "Transferir patrimônio",
              isFreeAction: true,
              onClick: (event, rowData) => {
                dispatch(
                  CreatorsTransfer.showModalCreateTransferencePatrimony(
                    id_patrimony
                  )
                );
              },
            },

            {
              icon: "printer",
              tooltip: "Gerar PDF",
              isFreeAction: true,
              onClick: (event, rowData) => {},
            },

            {
              icon: "close",
              tooltip: "Fechar",
              isFreeAction: true,
              onClick: (event, rowData) => {
                dispatch(CreatorsTransfer.hideModalListTransferencePatrimony());
              },
            },
          ]}
        />
      </div>
    </Modal>
  );
};

export default View;
