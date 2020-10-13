import React, { useState, useCallback } from "react";

import { Creators as CreatorsPage } from "~/store/ducks/page";
import { Creators as CreatorsPatrimony } from "~/store/ducks/patrimony";
import { useDispatch } from "react-redux";

import {
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Button,
} from "@material-ui/core/";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

/* Components */
import BasicsInformation from "./components/basics-information/";
import Localization from "./components/localization/";
import ClassificationDiscrimination from "./components/classification-discrimination/";
import PurchaseInformation from "./components/purchase-information";

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
      basic,
      local,
      classification,
      purchase,
    };

    dispatch(CreatorsPatrimony.createPatrimonyRequest(obj));
  };

  const backForListPatrimony = () => {
    dispatch(CreatorsPage.changePageLocation("patrimony_list"));
  };

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
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h4" className={classes.title}>
            Informações do Patrimônio
          </Typography>
        </Grid>

        {/* Informações Basicas */}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <BasicsInformation basicsInformations={basicsInformations} />
        </Grid>

        {/* Dados da Localização */}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Localization localization={localization} />
        </Grid>

        {/* Classificação e descriminação */}
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

        {/* Informação da Aquisição */}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <PurchaseInformation purchaseInformation={purchaseInformation} />
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={{ backgroundColor: "#2E64FE", color: "#fff" }}
          >
            criar novo patrimônio
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default PatrimonyItem;
