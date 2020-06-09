import React, { useState } from "react";

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

const BasicsInformations = () => {
  const classes = useStyles();

  const [tipping, setTipping] = useState("");
  const [discrimination, setDisrimination] = useState("");
  const [dateEntry, setDateEntry] = useState("");
  const [specification, setSpecification] = useState("");

  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <Typography className={classes.title}>Informações básicas</Typography>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Tombamento:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={tipping}
            onChange={(e) => setTipping(e.target.value)}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Descriminação do bem:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={discrimination}
            onChange={(e) => setDisrimination(e.target.value)}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <div>
          <Typography variant="button">Data de entrada:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            value={dateEntry}
            onChange={(e) => setDateEntry(e.target.value)}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} className={classes.input}>
        <div>
          <Typography variant="button">Especificação:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="text"
            multiline
            rows="2"
            value={specification}
            onChange={(e) => setSpecification(e.target.value)}
          />
        </div>
      </Grid>
    </>
  );
};

export default BasicsInformations;
