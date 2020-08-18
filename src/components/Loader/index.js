import React from "react";

import Circular from "@material-ui/core/CircularProgress";

export default () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div>
        <Circular />
      </div>
    </div>
  );
};
