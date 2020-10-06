import React, { useState, useEffect, useCallback } from "react";

import { Creators as CreatorsPage } from "~/store/ducks/page";
import { Creators as CreatorsLowPatrimony } from "~/store/ducks/low-patrimony-item";
import { Creators as CreatorsPatrimony } from "~/store/ducks/patrimony";
import { Creators as CreatorsOccurrencePatrimony } from "~/store/ducks/occurrence-patrimony-item";
import { useDispatch, useSelector } from "react-redux";

import ActionsInvoice from "~/store/ducks/invoice";

import {
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Snackbar,
} from "@material-ui/core/";

import { Alert } from "@material-ui/lab/";

import EditIcon from "@material-ui/icons/Edit";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

import BasicsImformation from "./components/basics-information/";
import Localization from "./components/localization/";
import ClassificationDiscrimination from "./components/classification-discrimination/";
import PurchaseInformation from "./components/purchase-information";
import Low from "./components/low/";

import ToggleMenu from "./components/toggle-menu";

import Invoice from "./components/button-invoice/";
import ImageButton from "./components/button-image/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "36px",
    },
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    display: "none",
  },
}));

const PatrimonyItem = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const edit = useSelector(
    (state) => state.patrimony_item.edit_patrimony_visible
  );

  const user = useSelector((state) => state.account.account_joined.role);

  const low_item_exist = useSelector(
    (state) => state.low_patrimony_item.low_item_patrimony_exist
  );

  const table = user && low_item_exist;

  const [open, setOpen] = useState(false);

  const changeEdit = () => {
    if (edit) {
      dispatch(CreatorsPatrimony.enablePatrimonyEdit());
    } else {
      dispatch(CreatorsPatrimony.disablePatrimonyEdit());
    }
  };

  const backForListPatrimony = () => {
    if (edit === true) {
      dispatch(CreatorsPage.changePageLocation("patrimony_list"));
    } else {
      handleClick();
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(true);
  };

  const id = useSelector((state) => state.patrimony_item.show_patrimony.id);

  useEffect(() => {
    dispatch(CreatorsLowPatrimony.readLowPatrimonyRequest(id));
    dispatch(CreatorsOccurrencePatrimony.readOccurrencePatrimonyRequest(id));
    dispatch(ActionsInvoice.readInvoiceRequest(id));
  }, [dispatch, id]);

  const [basic, setBasic] = useState({});

  const basicsInformations = useCallback((basics) => {
    setBasic(basics);
  }, []);

  const [local, setLocal] = useState({});

  const localization = useCallback((local) => {
    setLocal(local);
  }, []);

  const [classification, setClassification] = useState({});

  const classificationInformation = useCallback((classic) => {
    setClassification(classic);
  }, []);

  const [purchase, setPurchase] = useState({});

  const purchaseInformation = useCallback((purchase) => {
    setPurchase(purchase);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    var obj = {
      id,
      basic,
      local,
      classification,
      purchase,
    };

    dispatch(CreatorsPatrimony.updatePatrimonyRequest(obj));

    changeEdit();
  };

  console.log(table);

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{ color: "#BDBDBD" }}
    >
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} sm={12} className={classes.headerIcons}>
          <Tooltip title="Voltar">
            <IconButton
              style={{ color: "#a4a4a4" }}
              onClick={backForListPatrimony}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Invoice />

            <ImageButton />

            <Tooltip title="Ficha do bem">
              <IconButton>
                <PictureAsPdfIcon style={{ color: "#a4a4a4" }} />
              </IconButton>
            </Tooltip>

            {table === false ? (
              <></>
            ) : (
              <Tooltip title="Editar Informações">
                <IconButton onClick={changeEdit}>
                  <EditIcon
                    style={
                      edit === true
                        ? { color: "#a4a4a4" }
                        : { color: "#FF0040" }
                    }
                  />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h4" className={classes.title}>
            Informações do Patrimônio
          </Typography>
        </Grid>

        {/* Informações Basicas */}
        <Grid item xs={12} sm={12}>
          <BasicsImformation basicsInformations={basicsInformations} />
        </Grid>

        {/* Dados da Localização */}
        <Grid item xs={12} sm={12}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Localization localization={localization} />
          </Grid>
        </Grid>

        {/* Classificação e descriminação */}
        <Grid item xs={12} sm={12}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <ClassificationDiscrimination
              classificationInformation={classificationInformation}
            />
          </Grid>
        </Grid>

        {/* Informação da Aquisição */}
        <Grid item xs={12} sm={12}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <PurchaseInformation purchaseInformation={purchaseInformation} />
          </Grid>
        </Grid>

        {/* Baixa */}

        {low_item_exist === true ? (
          <Grid item xs={12} sm={12}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Low />
            </Grid>
          </Grid>
        ) : (
          <></>
        )}

        <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
          <ToggleMenu />
        </Grid>

        {edit === false ? (
          <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
            <Button
              variant="outlined"
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#FF0040",
                color: "#fff",
              }}
            >
              Salvar Alterações
            </Button>
          </Grid>
        ) : (
          <></>
        )}

        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Salve as alterações antes de sair da página.
          </Alert>
        </Snackbar>
      </form>
    </Grid>
  );
};

export default PatrimonyItem;
