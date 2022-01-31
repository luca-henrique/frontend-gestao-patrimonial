import React, { useState } from "react";

import { Creators as CreatorsUnits } from "~/store/ducks/units";
import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  Button,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "900%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const visible = useSelector((state) => state.units.update_units.visible);

  const data = useSelector((state) => state.units.update_units.data);

  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");

  React.useEffect(() => {
    setDescription(data.description);
    setResponsible(data.responsible);
  }, [data.description, data.responsible]);

  const handleOnSubmitUpdate = (e) => {
    e.preventDefault();

    var unit = {
      id: data.id,
      description,
      responsible,
    };

    dispatch(CreatorsUnits.updateUnitRequest(unit));
    handleOnClose();
  };

  const handleOnClose = () => {
    setDescription("");
    setResponsible("");
    dispatch(CreatorsUnits.hideUpdateUnits());
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={visible}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={visible}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            border: "2px solid #a4a4a4",
            borderRadius: "5px",
          }}
          className={classes.modal}
        >
          <form onSubmit={handleOnSubmitUpdate}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h4"
                  style={{
                    color: "#a4a4a4",
                  }}
                >
                  Únidade
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "10px", width: "100%" }}
              >
                <div>
                  <Typography
                    variant="button"
                    style={{
                      color: "#a4a4a4",
                    }}
                  >
                    Descrição:
                  </Typography>
                  <TextField
                    required
                    variant="outlined"
                    size="small"
                    type="text"
                    fullWidth
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "10px", width: "100%" }}
              >
                <div>
                  <Typography
                    variant="subtitle2"
                    style={{
                      color: "#a4a4a4",
                    }}
                  >
                    Responsável:
                  </Typography>
                  <TextField
                    required
                    variant="outlined"
                    size="small"
                    type="text"
                    fullWidth
                    value={responsible || ""}
                    onChange={(e) => setResponsible(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "10px", width: "100%" }}
              >
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                    width: "100%",
                  }}
                  onClick={handleOnClose}
                >
                  Fechar
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "10px", width: "100%" }}
              >
                <Button
                  variant="contained"
                  style={{ color: "#0174DF", width: "100%" }}
                  type="submit"
                >
                  Atualizar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}
