import React from "react";

import { Creators as CreatorsPage } from "~/store/ducks/page";
import { useDispatch } from "react-redux";

import { Grid, Typography, IconButton } from "@material-ui/core/";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";

import BasicsImformation from "./components/basics-information/";
import Localization from "./components/localization/";
import ClassificationDiscrimination from "./components/classification-discrimination/";
import PurchaseInformation from "./components/purchase-information";
import Low from "./components/low/";

import Toggle from "./components/toggle-menu";

const PatrimonyItem = () => {
  const dispatch = useDispatch();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{ color: "#BDBDBD" }}
    >
      <Grid item xs={12} sm={6}>
        <IconButton
          onClick={() => dispatch(CreatorsPage.changePageLocation("patrimony"))}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton>
          <EditIcon />
        </IconButton>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <Typography variant="h4">Informações do Patrimônio</Typography>
      </Grid>

      {/* Informações Basicas */}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <BasicsImformation />
      </Grid>

      {/* Dados da Localização */}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Localization />
      </Grid>

      {/* Classificação e descriminação */}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <ClassificationDiscrimination />
      </Grid>

      {/* Informação da Aquisição */}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <PurchaseInformation />
      </Grid>

      {/* Baixa */}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Low />
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <Toggle />
      </Grid>
    </Grid>
  );
};

export default PatrimonyItem;
