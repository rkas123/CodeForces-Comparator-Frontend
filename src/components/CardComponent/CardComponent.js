import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Graph from "../Graph/Graph.js";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const CardComponent = ({ data, dataset, codeForces }) => {
  const classes = useStyles();
  if (data.length !== 0 && dataset.length !== 0) {
    let currTime = new Date();
    currTime = currTime.getTime();
    let len = dataset.length;
    let prevRating = 0;
    for (let i = len - 1; i >= 0; i--) {
      if (currTime - dataset[i].time > 2419200000) {
        prevRating = dataset[i].rating;
        break;
      }
    }
    let increase = data.rating - prevRating;
    return (
      <>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {codeForces ? "CODEFORCES" : "CODECHEF"}
            </Typography>
            <Typography variant="subtitle2">{data.name}</Typography>
            <Grid container alignItems="center" justify="space-between">
              <Typography variant="h3" display="inline">
                {data.rating}
              </Typography>
              <Typography variant="h4" display="inline">
                {increase > 0
                  ? `+${increase}`
                  : increase === 0
                  ? `-`
                  : `${increase}`}
              </Typography>
            </Grid>

            <Typography variant="subtitle1">{data.rank}</Typography>
          </CardContent>
        </Card>
        <Graph data={{ users: [data.name], datasets: [dataset] }} />
      </>
    );
  }
};

export default CardComponent;
