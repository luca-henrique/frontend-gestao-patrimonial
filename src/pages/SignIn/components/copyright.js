import React from "react";
import { Typography, Link } from "@material-ui/core/";

const Copyright = () => (
  <Typography
    variant="body2"
    color="textSecondary"
    align="center"
    style={{ color: "#848484" }}
  >
    {"Copyright © "}
    <Link
      style={{ color: "#848484" }}
      href="https://ctmconsultoria.com/index.html"
    >
      CTM consultoria
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
