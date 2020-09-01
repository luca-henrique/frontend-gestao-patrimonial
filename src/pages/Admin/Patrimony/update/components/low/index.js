import React, { useEffect, useState } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsLowPatrimonyItem } from "~/store/ducks/low-patrimony-item";

import { formatDate } from "~/util/formatDate";

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

  const low = useSelector(
    (state) => state.low_patrimony_item.low_item_patrimony
  );

  const [type, setType] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState();

  useEffect(() => {
    setType(low.low_item_id);
    setReason(low.reason);
    setDate(low.low_date);
  }, [low.low_date, low.low_item_id, low.reason]);

  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <Typography className={classes.title}>Baixa</Typography>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.input}>
        <div>
          <Typography variant="button">Tipo de baixa:</Typography>
          <TextField variant="outlined" size="small" fullWidth value={type} />
        </div>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.input}>
        <div>
          <Typography variant="button">Data:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            value={formatDate(date)}
          />
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
            value={reason}
          />
        </div>
      </Grid>
    </>
  );
};

export default Low;
