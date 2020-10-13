import React from "react";

import Information from "./components/information/";
import Address from "./components/address/";
import Contact from "./components/contact/";

import { Grid, Button } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { Creators as CreatorsPrefecture } from "~/store/ducks/prefecture";

const Index = () => {
  const dispatch = useDispatch();

  const changePage = () => {
    dispatch(CreatorsPrefecture.createPrefectureComplete());
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={12}>
        <Information />
      </Grid>

      <Grid item xs={12} sm={12}>
        <Address />
      </Grid>

      <Grid item xs={12} sm={12}>
        <Contact />
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "10px",
        }}
      >
        <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
          <Button
            variant="contained"
            style={{ width: "100%", color: "#0174DF" }}
            onClick={changePage}
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Index;
