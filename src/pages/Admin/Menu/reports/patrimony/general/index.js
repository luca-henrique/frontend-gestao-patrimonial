import React from "react";

import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

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
          <TextField variant="outlined" size="small" fullWidth />
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
          <Select native size="small" fullWidth style={{ paddingLeft: "5px" }}>
            <option value="" />
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
          <Select native size="small" fullWidth style={{ paddingLeft: "5px" }}>
            <option value="" />
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
          <Select native size="small" fullWidth style={{ paddingLeft: "5px" }}>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Tipo de bem:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Estado de convervação:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Natureza:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Tipo de baixa:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
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
        >
          Gerar
        </Button>
      </Grid>
    </Grid>
  );
}
