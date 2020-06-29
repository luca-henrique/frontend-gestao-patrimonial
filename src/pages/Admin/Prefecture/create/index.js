import React from "react";

import Information from "./components/information/";
import Address from "./components/address/";
import Contact from "./components/contact/";

import { Grid, Button } from "@material-ui/core/";

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Information />
      <Address />
      <Contact />
    </div>
  );
};
export default Index;
