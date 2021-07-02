import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import FileDownload from "js-file-download";
import moment from "moment"

import {
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  Select,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core/";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function Create() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const [organ, setOrgan] = useState();
  const [sector, setSector] = useState();
  const [unit, setUnit] = useState();

  const [dateBuy, setDateBuy] = useState();
  const [dateEntry, setDateEntry] = useState();
  const [dateLow, setDateLow] = useState();

  const [titleReport, setTitleReport] = useState("");
  const [typeGood, setTypeGood] = useState();
  const [stateConservation, setStateConservation] = useState();
  const [nature, setNature] = useState();
  const [typeLow, setTypeLow] = useState();
  const [statusTypeLow, setStatusTypeLow] = useState();

  /**
   * orgaos
   */
  const locals = useSelector((state) => state.locale.locale_items);
  /**
   * setores
   */
  const sectors = useSelector((state) => state.sectors.sector);
  /**
   * unidades
   */
  const units = useSelector((state) => state.units.units);
  /**
   * natureza
   */
  const natures = useSelector((state) => state.nature.nature_items);
  /**
   * tipos de bens
   */
  const types_goods = useSelector((state) => state.good.good_items);
  /**
   * tipo de baixa
   */
  const type_lows = useSelector((state) => state.low.low_items);
  /**
   * estado de conservado
   */
  const state_patrimonies = useSelector((state) => state.state.state_items);

  const prefecture = useSelector((state) => state.prefecture);

  const handleReport = async () => {
    const response = await axios.post(
      "http://127.0.0.1:3333/reports/patrimony/general",
      {
        date_entry: dateEntry,
        date_buy: dateBuy,
        date_low: dateLow,
        organ_id: organ,
        sector_id: sector,
        unit_id: unit,
        prefecture_id: prefecture.prefecture.id,
        nature_item_id: nature,
        report_name: titleReport,
        low_item_id: typeLow,
        status: statusTypeLow === "baixados" ? true : false,
        type_low: typeLow,
        good_item_id: typeGood,
        state_item_id: stateConservation
      },
      {
        responseType: "blob",
      }
    );

    // FileDownload(response.data, "relatorio.pdf");

  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{
        color: "#a4a4a4",
      }}
    >
      <Grid item xs={12} sm={12}>
        <Typography variant="h3">Geral</Typography>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <div>
          <Typography variant="button">Titulo do relatório:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            onChange={(event) => setTitleReport(event.target.value)}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Período de entrada:</Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">De:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="date"
                onChange={(event) => setDateEntry(event.target.value)}
              />
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            style={{ marginTop: "10px", paddingLeft: "5px" }}
          >
            <div>
              <Typography variant="button">Até:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="date"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} style={{ paddingLeft: "5px" }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Período de Baixa:</Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">De:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="date"
                onChange={(event) => setDateLow(event.target.value)}
              />
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            style={{ marginTop: "10px", paddingLeft: "5px" }}
          >
            <div>
              <Typography variant="button">Até:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="date"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} style={{ paddingLeft: "5px" }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Período de compra:</Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">De:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="date"
                onChange={(event) => setDateBuy(event.target.value)}
              />
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            style={{ marginTop: "10px", paddingLeft: "5px" }}
          >
            <div>
              <Typography variant="button">Até:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="date"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <div>
          <Typography variant="button">Local:</Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={4} style={{ marginTop: "10px" }}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
        >
          <Typography variant="button">Orgão:</Typography>
          <Select
            native
            size="small"
            fullWidth
            style={{ paddingLeft: "5px" }}
            onChange={(event) => setOrgan(event.target.value)}
          >
            <option value="" />
            {locals.map((lc) => (
              <option key={lc.id} value={lc.id}>
                {lc.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} style={{ marginTop: "10px" }}>
        <FormControl
          variant="outlined"
          style={{ width: "100%", paddingLeft: "5px" }}
          size="small"
          fullWidth
        >
          <Typography variant="button">Setor:</Typography>
          <Select
            native
            size="small"
            fullWidth
            style={{ paddingLeft: "5px" }}
            onChange={(event) => setSector(event.target.value)}
          >
            <option value="" />
            {sectors.map((sec) => (
              <option key={sec.id} value={sec.id}>
                {sec.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} style={{ marginTop: "10px" }}>
        <FormControl
          variant="outlined"
          style={{ width: "100%", paddingLeft: "5px" }}
          size="small"
          fullWidth
        >
          <Typography variant="button">Únidade:</Typography>
          <Select
            native
            size="small"
            fullWidth
            style={{ paddingLeft: "5px" }}
            onChange={(event) => setUnit(event.target.value)}
          >
            <option value="" />
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Tipo de bem:</Typography>
          <Select
            native
            size="small"
            fullWidth
            onChange={(event) => setTypeGood(event.target.value)}
          >
            <option value="" />
            {types_goods.map((tg) => (
              <option key={tg.id} value={tg.id}>
                {tg.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Estado de convervação:</Typography>
          <Select
            native
            size="small"
            fullWidth
            onChange={(event) => setStateConservation(event.target.value)}
          >
            <option value="" />
            {state_patrimonies.map((sp) => (
              <option key={sp.id} value={sp.id}>
                {sp.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Natureza:</Typography>
          <Select
            native
            size="small"
            fullWidth
            onChange={(event) => setNature(event.target.value)}
          >
            <option value="" />
            {natures.map((nat) => (
              <option key={nat.id} value={nat.id}>
                {nat.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Tipo de baixa:</Typography>
          <Select
            native
            size="small"
            fullWidth
            onChange={(event) => setTypeLow(event.target.value)}
          >
            <option value="" />
            {type_lows.map((tl) => (
              <option key={tl.id} value={tl.id}>
                {tl.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Únidade:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{
          marginTop: "20px",
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup
            defaultValue="abertos"
            aria-label="gender"
            name="customized-radios"
            onChange={(event) => setStatusTypeLow(event.target.value)}
          >
            <FormControlLabel
              value="abertos"
              control={<StyledRadio />}
              label="abertos"
              style={{ paddingLeft: "15px", marginTop: "5px" }}
            />
            <FormControlLabel
              value="baixados"
              control={<StyledRadio />}
              label="baixados"
              style={{ paddingLeft: "15px" }}
            />
            <FormControlLabel
              value="todos"
              control={<StyledRadio />}
              label="todos"
              style={{ paddingLeft: "15px" }}
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<StyledRadio />}
              label="(option)"
              style={{ paddingLeft: "15px" }}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{
          marginTop: "20px",
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Ordem</FormLabel>
          <RadioGroup
            defaultValue="tombamento"
            aria-label="gender"
            name="customized-radios"
          >
            <FormControlLabel
              value="tombamento"
              control={<StyledRadio />}
              label="tombamento"
              style={{ paddingLeft: "15px", marginTop: "5px" }}
            />
            <FormControlLabel
              value="discriminacao"
              control={<StyledRadio />}
              label="discriminação"
              style={{ paddingLeft: "15px" }}
            />
            <FormControlLabel
              value="date_buy"
              control={<StyledRadio />}
              label="data da compra"
              style={{ paddingLeft: "15px" }}
            />
            <FormControlLabel
              value="date_low"
              control={<StyledRadio />}
              label="data da baixa"
              style={{ paddingLeft: "15px" }}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px", width: "100%" }}>
        <Button
          variant="contained"
          style={{ color: "#0174DF", width: "100%" }}
          type="submit"
          onClick={handleReport}
        >
          Gerar
        </Button>
      </Grid>
    </Grid>
  );
}
