import React, { useState, useEffect } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";

import InputAdornment from "@material-ui/core/InputAdornment";

import moment from "moment";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
  },
  input: {
    marginTop: "20px",
    paddingRight: "10px",
  },
}));

const Purchase = () => {
  //toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  const [bidding, setBidding] = useState("");
  const [effort, setEffort] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [numberInvoice, setNumberInvoice] = useState("");
  const [dateInvoice, setDateInvoice] = useState("");

  const [value, setValue] = useState(100.0);
  const [acquisitionValue, setAcquisitionValue] = useState(
    value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  );

  const patrimony = useSelector((state) => state.patrimony_item.show_patrimony);

  const classes = useStyles();

  function convertToReal(valor) {
    const v = ((valor.replace(/\D/g, "") / 100).toFixed(2) + "").split(".");

    const m = v[0]
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g);

    for (let i = 0; i < m.length; i++)
      m[i] =
        m[i]
          .split("")
          .reverse()
          .join("") + ".";

    const r = m.reverse().join("");

    return r.substring(0, r.lastIndexOf(".")) + "," + v[1];
  }

  useEffect(() => {
    setBidding(patrimony.bidding);
    setEffort(patrimony.effort);
    setBuyDate(formatDate(patrimony.dateBuy));
    setNumberInvoice(patrimony.numberInvoice);
    setDateInvoice(formatDate(patrimony.dateInvoice));
    setAcquisitionValue(
      patrimony.value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    );
  }, [
    patrimony.bidding,
    patrimony.dateBuy,
    patrimony.dateInvoice,
    patrimony.effort,
    patrimony.numberInvoice,
    patrimony.value,
  ]);

  function formatDate(data) {
    const date = moment(data).format("YYYY-MM-DD");
    return date;
  }

  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <Typography className={classes.title}>
          Informações da aquisição
        </Typography>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Licitação:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={bidding}
            onChange={(e) => setBidding(e.target.value)}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Empenho:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={effort}
            onChange={(e) => setEffort(e.target.value)}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Data de compra:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            value={buyDate}
            onChange={(e) => setBuyDate(e.target.value)}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Valor da aquisição:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={convertToReal(acquisitionValue)}
            onChange={(e) => setAcquisitionValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Nº da nota fiscal:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={numberInvoice}
            onChange={(e) => setNumberInvoice(e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Data da nota fiscal:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            value={dateInvoice}
            onChange={(e) => setDateInvoice(e.target.value)}
          />
        </div>
      </Grid>
    </>
  );
};

export default Purchase;
