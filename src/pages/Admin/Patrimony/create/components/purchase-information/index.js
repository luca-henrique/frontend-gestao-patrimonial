import React, { useState } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import InputAdornment from "@material-ui/core/InputAdornment";

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

  const classes = useStyles();

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
            required
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
            required
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
            required
            variant="outlined"
            size="small"
            fullWidth
            value={value}
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
          <Typography variant="button">Nº da nota fiscal:</Typography>
          <TextField
            required
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
            required
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            value={dateInvoice}
            onChange={(e) => setDateInvoice(e.target.value)}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} className={classes.input}>
        <div>
          <Typography variant="button">Dotação:</Typography>
          <TextField
            required
            variant="outlined"
            size="small"
            fullWidth
            type="text"
            value={allocation}
            onChange={(e) => setAllocation(e.target.value)}
          />
        </div>
      </Grid>
    </>
  );
});

export default Purchase;
