import React, { useState, useEffect } from "react";

import { Creators as CreatorsStateItem } from "~/store/ducks/state-item";
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
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },

  text: {
    [theme.breakpoints.up("md")]: {
      fontSize: "26px !important",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const visible = useSelector((state) => state.state.update_state_item.visible);
  const data = useSelector((state) => state.state.update_state_item.data);

  const dispatch = useDispatch();

  const [descricao, setDescricao] = useState("");

  const handleOnClose = () => {
    setDescricao("");
    dispatch(CreatorsStateItem.hideUpdateStateItem());
  };

  useEffect(() => {
    setDescricao(data.description);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var obj = {
      id: data.id,
      description: descricao,
    };

    dispatch(CreatorsStateItem.updateStateItemRequest(obj));
    handleOnClose();
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
                  className={classes.text}
                >
                  Atualizar estado
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{
                  marginTop: "10px",
                  width: "100%",
                }}
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
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                style={{
                  marginTop: "15px",
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
