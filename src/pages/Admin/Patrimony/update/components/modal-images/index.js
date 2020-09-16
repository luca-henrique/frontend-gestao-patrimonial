import React, { useEffect } from "react";

import { Modal } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import ActionsImage from "~/store/ducks/image";
import { useSelector, useDispatch } from "react-redux";

import MaterialTable from "material-table";

import BackupIcon from "@material-ui/icons/Backup";

import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: "#ffff",
    [theme.breakpoints.down("sm")]: {
      width: "100% ",
      height: "70%",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
      height: "40%",
    },
  },
}));

const Icon = ({ upload }) => {
  return (
    <>
      <input
        id="contained-button-file"
        multiple
        type="file"
        style={{ display: "none" }}
        accept="image"
        onChange={upload}
      />
      <label htmlFor="contained-button-file">
        <IconButton component="span">
          <BackupIcon />
        </IconButton>
      </label>
    </>
  );
};

const View = () => {
  const [state] = React.useState({
    columns: [
      {
        title: "Nome",
        field: "name",
      },

      {
        title: "Data",
        field: "created_at",
        type: "date",
      },
    ],
  });

  const classes = useStyles();

  const visible = useSelector((state) => state.image.open);

  const dispatch = useDispatch();

  const id = useSelector((state) => state.patrimony_item.show_patrimony.id);

  const handleClose = () => {
    dispatch(ActionsImage.hideModalImage());
  };

  const data = useSelector((state) => state.image.images);

  useEffect(() => {
    if (visible) {
      dispatch(ActionsImage.readImageRequest(id));
    }
  }, [dispatch, id, visible]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ActionsImage.uploadImageRequest(id, e.target.files));
  };

  const actions = [
    {
      icon: () => <Icon upload={handleSubmit} />,
      tooltip: "Upload",
      isFreeAction: true,
    },

    {
      icon: "close",
      tooltip: "Fechar",
      isFreeAction: true,
      onClick: () => handleClose(),
    },

    {
      icon: "delete",
      tooltip: "Deletar imagem",
      onClick: (event, rowData) => {},
    },

    {
      icon: "save_alt",
      tooltip: "Download",
      onClick: (event, rowData) => {
        dispatch(ActionsImage.downloadImageRequest(rowData.id));
      },
    },
  ];

  return (
    <Modal
      open={visible}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={classes.modal}>
        <MaterialTable
          title="Imagens"
          columns={state.columns}
          data={data}
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
          actions={actions}
        />
      </div>
    </Modal>
  );
};

export default View;
