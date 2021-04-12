import React from "react";
import UpdateIcon from "@material-ui/icons/Update";
import { Typography, Grid } from "@material-ui/core";

const Friends = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: "50px" }}>
      <Grid item xs={12} align="center">
        <UpdateIcon style={{ width: "100px", height: "100px" }} />
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h4">Coming Soon...</Typography>
      </Grid>
    </Grid>
  );
};

export default Friends;
