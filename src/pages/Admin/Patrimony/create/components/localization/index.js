import React, { useState } from "react";

import { Grid, Typography, FormControl, Select } from "@material-ui/core/";

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

const Localization = () => {
  const classes = useStyles();

  const [institution, setInstitution] = useState("");
  const [sector, setSector] = useState("");
  const [unit, setUnit] = useState("");

  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <Typography className={classes.title}>Dados da localização</Typography>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        >
          <Typography variant="button">Orgão:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <Typography variant="button">Setor:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.input}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <Typography variant="button">Únidade:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default Localization;
