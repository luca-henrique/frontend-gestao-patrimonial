import React, { useState, useEffect } from "react";

import { Grid, Typography, FormControl, Select } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";

import { Creators as CreatorsSectors } from "~/store/ducks/sectors";
import { Creators as CreatorsLocale } from "~/store/ducks/locale-item";
import { Creators as CreatorsUnit } from "~/store/ducks/units";

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

const Localization = React.memo(({ localization }) => {
  const classes = useStyles();

  const [institution, setInstitution] = useState("");
  const [sector, setSector] = useState("");
  const [unit, setUnit] = useState("");

  const dispatch = useDispatch();

  const patrimony = useSelector((state) => state.patrimony_item.show_patrimony);

  const edit = useSelector(
    (state) => state.patrimony_item.edit_patrimony_visible
  );

  useEffect(() => {
    setInstitution(patrimony.locale_item_id);
    setSector(patrimony.sector_id);
    setUnit(patrimony.unit_id);

    dispatch(CreatorsLocale.readLocaleItemRequest());
    dispatch(CreatorsSectors.readSectorsRequest(patrimony.locale_item_id));
    dispatch(CreatorsUnit.readUnitRequest(patrimony.sector_id));
  }, [
    dispatch,
    patrimony.locale_item_id,
    patrimony.sector_id,
    patrimony.unit_id,
  ]);

  const locals = useSelector((state) => state.locale.locale_items);
  const loading_locale = useSelector(
    (state) => state.locale.locale_item_loading
  );

  const sectors = useSelector((state) => state.sectors.sector);
  const loading_sectors = useSelector((state) => state.sectors.loading_sectors);

  const units = useSelector((state) => state.units.units);
  const loading_units = useSelector((state) => state.units.loading_units);

  localization({ institution, sector, unit });

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
          onChange={(e) => {
            setInstitution(e.target.value);
            dispatch(CreatorsSectors.readSectorsRequest(e.target.value));
            dispatch(CreatorsUnit.changerLoadingUnits());
            setUnit("");
          }}
          disabled={edit || loading_locale}
        >
          <Typography variant="subtitle1">Orgão:</Typography>
          <Select native size="small" fullWidth value={institution}>
            {locals.map((local) => (
              <option value={local.id} key={local.id}>
                {local.description}
              </option>
            ))}
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
          onChange={(e) => {
            setSector(e.target.value);
            dispatch(CreatorsUnit.readUnitRequest(e.target.value));
          }}
          disabled={edit || loading_sectors}
        >
          <Typography variant="subtitle1">Setor:</Typography>
          <Select native size="small" fullWidth value={sector}>
            <option value="" />
            {sectors.map((sector) => (
              <option value={sector.id} key={sector.id}>
                {sector.description}
              </option>
            ))}
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
          disabled={edit || loading_units}
        >
          <Typography variant="subtitle1">Únidade:</Typography>
          <Select native size="small" fullWidth value={unit}>
            <option value="" />
            {units.map((unit) => (
              <option value={unit.id} key={unit.id}>
                {unit.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
});

export default Localization;
