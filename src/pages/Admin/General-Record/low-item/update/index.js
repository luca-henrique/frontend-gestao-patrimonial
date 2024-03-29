import React, { useState, useEffect } from "react";

import { Creators as CreatorsLowItem } from "~/store/ducks/low-item";
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

import { Close } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const lowItem = useSelector((state) => state.low.update_low_item.data);
  const visible = useSelector((state) => state.low.update_low_item.visible);

  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(lowItem.description);
  }, [lowItem.description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var lowItemObj = {
      id: lowItem.id,
      description,
    };
    setDescription("");
    dispatch(CreatorsLowItem.updateLowItemRequest(lowItemObj));
    handleOnClose();
  };

  const handleOnClose = () => {
    setDescription("");
    dispatch(CreatorsLowItem.hideUpdateLowItem());
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
          <form onSubmit={handleSubmit}>
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
                  Atualizar baixa
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "25px", width: "100%" }}
              >
                <div>
                  <Typography
                    variant="subtitle2"
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
                    fullWidth
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "100%",
                }}
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
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "100%",
                }}
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
