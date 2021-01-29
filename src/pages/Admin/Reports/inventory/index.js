import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import { saveAs } from "file-saver";
import FileDownload from "js-file-download";
import {
  Typography,
  Grid,
  TextField,
  FormControl,
  Select,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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

  const [unit, setUnit] = useState();
  const [sector, setSector] = useState();
  const [local, setLocal] = useState();
  const [dateInitial, setDateInitial] = useState();
  const [dateFinally, setDateFinally] = useState();

  const prefecture = useSelector((state) => state.prefecture);
  /**
   * generate report
   */
  const handleReport = async () => {
    const token = localStorage.getItem("@Omni:token");

    const response = await axios.post(
      "http://127.0.0.1:3333/reports/inventory",
      {
        unit_id: unit,
        sector_id: sector,
        organ_id: local,
        date_initial: moment(dateInitial).format("YYYY-MM-DD HH:mm:ss"),
        date_finally: moment(dateFinally).format("YYYY-MM-DD HH:mm:ss"),
        prefecture_id: prefecture.prefecture.id,
      },
      {
        responseType: "blob",
      }
    );
    FileDownload(response.data, "relatorio.pdf");

    // const file = new Blob([response.data], {
    //   type: 'application/pdf'
    // })
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
        <Typography variant="h4">Inventario</Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
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

          <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">De:</Typography>
              <TextField
                defaultValue="0"
                variant="outlined"
                size="small"
                fullWidth
                type="date"
                onChange={(event) => setDateInitial(event.target.value)}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={2} />

          <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">Até:</Typography>
              <TextField
                defaultValue="0"
                variant="outlined"
                size="small"
                fullWidth
                type="date"
                onChange={(event) => setDateFinally(event.target.value)}
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
            onChange={(event) => setLocal(event.target.value)}
          >
            <option value="" />
            {locals.map((lc) => (
              <option value={lc.id} key={lc.id}>
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
            {sectors.map((sc) => (
              <option value={sc.id} key={sc.id}>
                {sc.description}
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
            {units.map((un) => (
              <option value={un.id} key={un.id}>
                {un.description}
              </option>
            ))}
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
          <RadioGroup
            defaultValue="geral"
            aria-label="gender"
            name="customized-radios"
          >
            <FormControlLabel
              value="geral"
              control={<StyledRadio />}
              label="geral"
              style={{ paddingLeft: "15px", marginTop: "5px" }}
            />
            <FormControlLabel
              value="secretaria"
              control={<StyledRadio />}
              label="por secretaria"
              style={{ paddingLeft: "15px" }}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "25px", width: "100%" }}>
        <Button
          variant="contained"
          style={{ color: "#0174DF", width: "100%" }}
          type="submit"
          onClick={() => handleReport()}
        >
          Gerar
        </Button>
      </Grid>
    </Grid>
  );
}
