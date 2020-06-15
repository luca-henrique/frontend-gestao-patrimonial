import React from "react";

import { Modal, Grid, Typography, Button } from "@material-ui/core/";

import Information from "./components/information/";
import Address from "./components/address/";
import Contact from "./components/contact/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#fff",
    padding: "10px",
    border: "1px solid #D8D8D8",
    borderRadius: "5px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflowX: "visible",
      overflowY: "scroll",
    },
    [theme.breakpoints.up("md")]: {
      width: "700px",
    },
  },
}));

function View(props) {
  const classes = useStyles();

  return (
    <Modal
      open={false}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={classes.main}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h4"
              style={{
                justifyContent: "center",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Cadastrar Prefeitura
            </Typography>
          </Grid>

          {/* informações */}
          <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
            <Typography variant="h5">Informações</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Information />
          </Grid>

          {/* Endereço */}
          <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
            <Typography variant="h5">Endereço</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Address />
          </Grid>

          {/* Contato */}
          <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
            <Typography variant="h5">Contato</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Contact />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
            <div style={{ width: "100%" }}>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  marginTop: "15px",
                  backgroundColor: "#2E64FE",
                  color: "#f4f4f4",
                }}
              >
                Criar
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}

export default View;
