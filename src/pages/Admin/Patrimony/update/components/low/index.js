import React from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

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

const Low = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <Typography className={classes.title}>Baixa</Typography>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.input}>
        <div>
          <Typography variant="button">Tipo de baixa:</Typography>
          <TextField variant="outlined" size="small" fullWidth />
        </div>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.input}>
        <div>
          <Typography variant="button">Data:</Typography>
          <TextField variant="outlined" size="small" fullWidth type="date" />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} className={classes.input}>
        <div>
          <Typography variant="button">Motivo:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="text"
            multiline
            rows="2"
          />
        </div>
      </Grid>
    </>
  );
};

export default Low;
