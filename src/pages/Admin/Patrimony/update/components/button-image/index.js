import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import { useSelector, useDispatch } from "react-redux";
import ActionsImages from "~/store/ducks/image";

import { Tooltip, IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons/";

export default function SplitButton() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(ActionsImages.openModalImage());
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Tooltip title="Imagem">
          <IconButton onClick={openModal}>
            <PhotoCamera style={{ color: "#a4a4a4" }} />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
