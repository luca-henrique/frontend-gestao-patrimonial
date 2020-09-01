import React, { useState, useEffect } from "react";
import { Grid, Typography, FormControl, Select } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsNatureItem } from "~/store/ducks/nature-item";
import { Creators as CreatorsOriginItem } from "~/store/ducks/origin-item";
import { Creators as CreatorsState } from "~/store/ducks/state-item";
import { Creators as CreatorsGoodItem } from "~/store/ducks/good-item";

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

  const dispatch = useDispatch();

  const states = useSelector((state) => state.state.state_items);
  const loading_states = useSelector(
    (state) => state.state.loading_state_items
  );

  const natures = useSelector((state) => state.nature.nature_items);
  const loading_nature = useSelector(
    (state) => state.nature.loading_nature_items
  );

  const origins = useSelector((state) => state.origin.origin_items);
  const loading_origin = useSelector(
    (state) => state.origin.loading_origin_items
  );

  const goods = useSelector((state) => state.good.good_items);
  const loading_good = useSelector((state) => state.good.loading_good_items);

  const patrimony = useSelector((state) => state.patrimony_item.show_patrimony);

  useEffect(() => {
    dispatch(CreatorsGoodItem.readGoodItemRequest());
    dispatch(CreatorsNatureItem.readNatureItemRequest());
    dispatch(CreatorsOriginItem.readOriginItemRequest());
    dispatch(CreatorsState.readStateItemRequest());

    setNature(patrimony.nature_item_id);
    setOrigin(patrimony.origin_item_id);
    setState(patrimony.state_item_id);
    setType(patrimony.good_item_id);
  }, [
    dispatch,
    patrimony.good_item_id,
    patrimony.nature_item_id,
    patrimony.origin_item_id,
    patrimony.state_item_id,
  ]);

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
          disable={loading_nature}
        >
          <Typography variant="button">Natureza:</Typography>
          <Select native size="small" fullWidth value={nature}>
            {natures.map((natu) => (
              <option key={natu.id} value={natu.id}>
                {natu.description}
              </option>
            ))}
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
          disabled={loading_origin}
        >
          <Typography variant="button">Origem do bem:</Typography>
          <Select native size="small" fullWidth value={origin}>
            {origins.map((ori) => (
              <option key={ori.id} value={ori.id}>
                {ori.description}
              </option>
            ))}
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
          disabled={loading_states}
        >
          <Typography variant="button">Estado de conservação:</Typography>
          <Select native size="small" fullWidth value={state}>
            {states.map((sta) => (
              <option key={sta.id} value={sta.id}>
                {sta.description}
              </option>
            ))}
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
          disabled={loading_good}
        >
          <Typography variant="button">Tipo do bem:</Typography>
          <Select native size="small" fullWidth value={type}>
            {goods.map((go) => (
              <option key={go.id} value={go.id}>
                {go.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default Classification;
