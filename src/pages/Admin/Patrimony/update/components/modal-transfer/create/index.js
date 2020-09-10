import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsTransfer } from "~/store/ducks/transference-patrimony-item";

import { Typography, Modal, Backdrop, Fade, Grid } from "@material-ui/core/";

import { Creators as CreatorsSectors } from "~/store/ducks/sectors";
import { Creators as CreatorsLocale } from "~/store/ducks/locale-item";
import { Creators as CreatorsUnit } from "~/store/ducks/units";

import { Creators as CreatorsPatrimony } from "~/store/ducks/patrimony";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    border: "1px solid #D8D8D8",
    color: "#BDBDBD",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "420px",
      width: "900px",
    },
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      overflowY: "scroll",
      height: "100%",
      display: "inline-block",
    },
  },

  button: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px !important",
    },
  },
}));

const Create = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [institution, setInstitution] = useState("");
  const [sector, setSector] = useState("");
  const [unit, setUnit] = useState("");

  const patrimony = useSelector((state) => state.patrimony_item.show_patrimony);
  console.log(patrimony);

  const visible = useSelector(
    (state) =>
      state.transfer_patrimony_item.create_transference_patrimony.visible
  );

  const id_patrimony = useSelector(
    (state) =>
      state.transfer_patrimony_item.create_transference_patrimony.id_patrimony
  );

  function create(e) {
    e.preventDefault();

    var transference = {
      id_patrimony,
      new_locale_item_id: institution,
      new_sector_id: sector,
      new_unit_id: unit,
    };

    dispatch(CreatorsTransfer.createTransferencePatrimonyRequest(transference));
    dispatch(CreatorsPatrimony.changerTransferencePatrimony(transference));

    hide();
  }

  const hide = () => {
    dispatch(CreatorsTransfer.hideModalCreateTransferencePatrimony());
    setInstitution("");
    setSector("");
    setUnit("");
  };

  useEffect(() => {
    if (visible) {
      dispatch(CreatorsLocale.readLocaleItemRequest());
      dispatch(
        CreatorsLocale.readUniqueLocaleItemRequest(patrimony.locale_item_id)
      );
      dispatch(CreatorsSectors.readUniqueSectorsRequest(patrimony.sector_id));
      dispatch(CreatorsUnit.readUniqueUnitRequest(patrimony.unit_id));
    }
  }, [
    dispatch,
    patrimony.locale_item_id,
    patrimony.sector_id,
    patrimony.unit_id,
    visible,
  ]);

  const locals = useSelector((state) => state.locale.locale_items);
  const loading_locale = useSelector(
    (state) => state.locale.locale_item_loading
  );

  const sectors = useSelector((state) => state.sectors.sector);
  const loading_sectors = useSelector((state) => state.sectors.loading_sectors);

  const units = useSelector((state) => state.units.units);
  const loading_units = useSelector((state) => state.units.loading_units);

  const current_locale = useSelector((state) => state.locale.locale_item);

  const current_sector = useSelector((state) => state.sectors.secto);

  const current_unit = useSelector((state) => state.units.unit);

  return (
    <Modal
      className={classes.main}
      open={visible}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <form onSubmit={create}>
        <Fade in={visible}>
          <div className={classes.modal}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "10px", textAlign: "center" }}
              >
                <Typography variant="h4">Nova Transferência</Typography>
              </Grid>

              <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
                <Grid container direction="column">
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <Typography variant="subtitle2">Local de origem</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <Typography variant="button">Orgão:</Typography>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled
                        value={current_locale.description}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <FormControl
                        variant="outlined"
                        style={{ width: "100%" }}
                        size="small"
                        fullWidth
                      >
                        <Typography variant="subtitle2">Setor:</Typography>
                        <TextField
                          variant="outlined"
                          size="small"
                          fullWidth
                          disabled
                          value={current_sector.description}
                        />
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <FormControl
                        variant="outlined"
                        style={{ width: "100%" }}
                        size="small"
                        fullWidth
                      >
                        <Typography variant="subtitle2">Únidade:</Typography>
                        <TextField
                          variant="outlined"
                          size="small"
                          fullWidth
                          disabled
                          value={current_unit.description}
                        />
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={2} />

              <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
                <Grid container direction="column">
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <Typography variant="subtitle2">Novo local</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <FormControl
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={institution}
                        onChange={(e) => {
                          setInstitution(e.target.value);
                          dispatch(
                            CreatorsSectors.readSectorsRequest(e.target.value)
                          );
                          dispatch(CreatorsUnit.changerLoadingUnits());
                          setUnit("");
                        }}
                        disabled={loading_locale}
                      >
                        <Typography variant="subtitle2">Orgão:</Typography>
                        <Select
                          native
                          size="small"
                          fullWidth
                          value={institution}
                        >
                          <option value="" />
                          {locals.map((local) => (
                            <option value={local.id} key={local.id}>
                              {local.description}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <FormControl
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={sector}
                        onChange={(e) => {
                          setSector(e.target.value);
                          dispatch(
                            CreatorsUnit.readUnitRequest(e.target.value)
                          );
                        }}
                        disabled={loading_sectors}
                      >
                        <Typography variant="subtitle2">Setor:</Typography>
                        <Select native size="small" fullWidth value={sector}>
                          <option value="" />
                          {sectors.map((sector) => (
                            <option value={sector.id} key={sector.id}>
                              {sector.description}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <FormControl
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        disabled={loading_units}
                      >
                        <Typography variant="subtitle2">Únidade:</Typography>
                        <Select native size="small" fullWidth value={unit}>
                          <option value="" />
                          {units.map((unit) => (
                            <option value={unit.id} key={unit.id}>
                              {unit.description}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="flex-end"
                >
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    className={classes.button}
                    style={{ marginTop: "10px", marginRight: "20px" }}
                  >
                    <Button
                      variant="contained"
                      color="default"
                      fullWidth
                      style={{ backgroundColor: "#DF013A", color: "#fff" }}
                      onClick={hide}
                    >
                      Fechar
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4} style={{ marginTop: "10px" }}>
                    <Button
                      variant="contained"
                      color="default"
                      fullWidth
                      style={{ backgroundColor: "#0174DF", color: "#fff" }}
                      type="submit"
                    >
                      Tranferir
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </form>
    </Modal>
  );
};

export default Create;
