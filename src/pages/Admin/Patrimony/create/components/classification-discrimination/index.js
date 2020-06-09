import React, { useState } from "react";
import { Grid, Typography, FormControl, Select } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
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

const Classification = () => {
  const classes = useStyles();

  const [nature, setNature] = useState("");
  const [origin, setOrigin] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <Typography className={classes.title}>
          Classificação e descriminação
        </Typography>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.input}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
          value={nature}
          onChange={(e) => setNature(e.target.value)}
        >
          <Typography variant="button">Natureza:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.input}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        >
          <Typography variant="button">Origem do bem:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.input}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <Typography variant="button">Estado de conservação:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.input}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <Typography variant="button">Tipo do bem:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default Classification;
