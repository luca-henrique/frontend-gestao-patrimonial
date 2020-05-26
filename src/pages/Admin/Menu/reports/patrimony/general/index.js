import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  Button,
  FormControl,
  Select,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const visible = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={false}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={false}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            border: "2px solid #a4a4a4",
            borderRadius: "5px",
            color: "#a4a4a4",
          }}
          className={classes.modal}
        >
          <Grid container direction="row">
            <Grid item xs={12} sm={12}>
              <Typography variant="h4">Relatório Geral</Typography>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={12} sm={12}>
                  <Grid container direction="column">
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={1} />

            <Grid item xs={12} sm={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={12} sm={12}>
                  <Grid container direction="column">
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Aqui */}
            <Grid item xs={12} sm={1} />

            <Grid item xs={12} sm={3}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={12} sm={12}>
                  <Grid container direction="column">
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div>
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          fullWidth
                        >
                          <Typography variant="button">Orgão:</Typography>
                          <Select native size="small" fullWidth>
                            <option value="" />
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}

/*

 <Grid
              item
              xs={12}
              sm={12}
              style={{ marginTop: "25px", width: "100%" }}
            >
              <div>
                <Typography
                  variant="button"
                  style={{
                    color: "#a4a4a4",
                  }}
                >
                  Titulo do Relatório:
                </Typography>
                <TextField required variant="outlined" size="small" fullWidth />
              </div>
            </Grid>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              style={{
                marginTop: "20px",
              }}
            >
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="button"
                  style={{
                    color: "#a4a4a4",
                  }}
                >
                  Local:
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                style={{ padding: "10px" }}
              >
                <Grid item xs={12} sm={12}>
                  <div>
                    <FormControl
                      variant="outlined"
                      style={{ width: "100%" }}
                      size="small"
                      fullWidth
                    >
                      <Typography
                        variant="button"
                        style={{
                          color: "#a4a4a4",
                        }}
                      >
                        Orgão:
                      </Typography>
                      <Select native size="small" fullWidth>
                        <option value="" />
                      </Select>
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
                      <Typography
                        variant="button"
                        style={{
                          color: "#a4a4a4",
                        }}
                      >
                        Setor:
                      </Typography>
                      <Select native size="small" fullWidth>
                        <option value="" />
                      </Select>
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
                      <Typography
                        variant="button"
                        style={{
                          color: "#a4a4a4",
                        }}
                      >
                        Únidade:
                      </Typography>
                      <Select native size="small" fullWidth>
                        <option value="" />
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              style={{ marginTop: "25px", width: "100%" }}
            >
              <Button
                color="secondary"
                variant="contained"
                style={{
                  width: "100%",
                }}
              >
                Cancelar
              </Button>
            </Grid>
            */

/* <Grid item xs={12} sm={6} style={{ width: "100%" }}>
              <Button
                variant="contained"
                style={{ color: "#0174DF", width: "100%" }}
              >
                Cancelar
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} style={{ width: "100%" }}>
              <Button
                variant="contained"
                style={{ color: "#0174DF", width: "100%" }}
              >
                Imprimir
              </Button>
            </Grid>
            */
