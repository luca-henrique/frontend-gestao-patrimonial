import React, { useState } from "react";

import { Creators as CreatorsPage } from "~/store/ducks/page";
import { useDispatch } from "react-redux";

import {
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Button,
} from "@material-ui/core/";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

/* Components */
import BasicsImformation from "./components/basics-information/";
import Localization from "./components/localization/";
import ClassificationDiscrimination from "./components/classification-discrimination/";
import PurchaseInformation from "./components/purchase-information";
import Low from "./components/low/";

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

  // eslint-disable-next-line no-unused-vars
  const [invoice, setInvoice] = useState(false);

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
      <form onSubmit={(e) => e.preventDefault()}>
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
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type={invoice === false ? "file" : ""}
            />
            <label htmlFor="icon-button-file">
              <Tooltip title="Nota Fiscal">
                <IconButton aria-label="upload picture" component="span">
                  <FileCopyIcon style={{ color: "#a4a4a4" }} />
                </IconButton>
              </Tooltip>
            </label>

            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-photo"
              type="file"
            />
            <label htmlFor="icon-button-photo">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Tooltip title="Adicionar Foto">
                  <PhotoCamera style={{ color: "#a4a4a4" }} />
                </Tooltip>
              </IconButton>
            </label>
          </div>
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
