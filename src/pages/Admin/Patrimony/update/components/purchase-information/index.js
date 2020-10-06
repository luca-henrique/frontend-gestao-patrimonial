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

const Purchase = React.memo(({ purchaseInformation }) => {
  const [bidding, setBidding] = useState("");
  const [effort, setEffort] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [numberInvoice, setNumberInvoice] = useState("");
  const [dateInvoice, setDateInvoice] = useState("");

  const [value, setValue] = useState("");

  const [allocation, setAllocation] = useState("");

  const patrimony = useSelector((state) => state.patrimony_item.show_patrimony);

  const edit = useSelector(
    (state) => state.patrimony_item.edit_patrimony_visible
  );

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
    setValue(
      patrimony.value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    );
    setAllocation(patrimony.allocation);
  }, [
    patrimony.allocation,
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

  purchaseInformation({
    bidding,
    effort,
    buyDate,
    numberInvoice,
    dateInvoice,
    value,
    allocation,
  });

  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <Typography className={classes.title}>
          Informações da aquisição
        </Typography>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="subtitle1">Licitação:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={bidding}
            onChange={(e) => setBidding(e.target.value)}
            disabled={edit}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="subtitle1">Empenho:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={effort}
            onChange={(e) => setEffort(e.target.value)}
            disabled={edit}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="subtitle1">Data de compra:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            value={buyDate}
            onChange={(e) => setBuyDate(e.target.value)}
            disabled={edit}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="subtitle1">Valor da aquisição:</Typography>
          <TextField
            disabled={edit}
            variant="outlined"
            size="small"
            fullWidth
            value={convertToReal(value)}
            onChange={(e) => setValue(e.target.value)}
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
          <Typography variant="subtitle1">Nº da nota fiscal:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={numberInvoice}
            onChange={(e) => setNumberInvoice(e.target.value)}
            disabled={edit}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="subtitle1">Data da nota fiscal:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            value={dateInvoice}
            onChange={(e) => setDateInvoice(e.target.value)}
            disabled={edit}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} className={classes.input}>
        <div>
          <Typography variant="subtitle1">Dotação:</Typography>
          <TextField
            required
            variant="outlined"
            size="small"
            fullWidth
            type="text"
            value={allocation}
            onChange={(e) => setAllocation(e.target.value)}
            disabled={edit}
          />
        </div>
      </Grid>
    </>
  );
});

export default Purchase;
