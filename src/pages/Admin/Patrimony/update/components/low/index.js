import React, { useEffect, useState } from "react";

import {
  Grid,
  Typography,
  TextField,
  Select,
  FormControl,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";

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

  const lows = useSelector((state) => state.low.low_items);

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
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          disabled
        >
          <Typography variant="button">Tipo de baixa:</Typography>
          <Select native size="small" fullWidth value={type}>
            <option value="" />
            {lows.map((local) => (
              <option value={local.id} key={local.id}>
                {local.description}
              </option>
            ))}
          </Select>
        </FormControl>
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
            disabled
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
            disabled
          />
        </div>
      </Grid>
    </>
  );
};

export default Low;
