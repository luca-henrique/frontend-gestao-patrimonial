import React, { useState, useEffect } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";

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

const BasicsInformations = () => {
  const classes = useStyles();

  const patrimony = useSelector((state) => state.patrimony_item.show_patrimony);

  const [tipping, setTipping] = useState("");
  const [discrimination, setDisrimination] = useState("");
  const [dateEntry, setDateEntry] = useState("");
  const [specification, setSpecification] = useState("");

  useEffect(() => {
    setTipping(patrimony.tipping);
    setDisrimination(patrimony.discrimination);
    setDateEntry(patrimony.dateEntry);
    setSpecification(patrimony.specification);
  }, [
    patrimony.dateEntry,
    patrimony.discrimination,
    patrimony.specification,
    patrimony.tipping,
  ]);

  function formatDate(data) {
    const date = moment(data).format("YYYY-MM-DD");
    return date;
  }

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
            value={formatDate(dateEntry)}
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
