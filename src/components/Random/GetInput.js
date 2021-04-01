import React, { useState } from "react";
import { TextField, Grid, Button, CircularProgress } from "@material-ui/core";
import Graph from "../Graph/Graph.js";
import axios from "axios";

const GetInput = ({ inputs, platform }) => {
  let users = [];
  let datasets = [];
  const temp = Array.from({ length: inputs }, () => "");
  let indexes = Array.from({ length: inputs }, (_, i) => i);
  const [showGraph, setShowGraph] = useState(false);
  const [ids, setIds] = useState(temp);
  const [state, setState] = useState({ dataFetch: 0 });
  const onChangeHandler = (event) => {
    let index = parseInt(event.target.name);
    setIds((prevState) => {
      const temp = prevState;
      temp[index] = event.target.value;
      return temp;
    });
  };

  const fetchDataCF = async () => {
    // console.log("fetchCF");
    if (state.dataFetch === 1) return;
    for (let i = 0; i < ids.length; i++) {
      let contestData;
      const url2 = `https://codeforces.com/api/user.rating?handle=${ids[i]}`;
      try {
        // console.log(i + "fetched");
        contestData = await axios.get(url2);
      } catch (error) {
        console.log(error);
      }

      users.push(`${ids[i]}`);
      const data = [];
      contestData.data.result.forEach((contest) => {
        data.push({
          id: contest.ratingUpdateTimeSeconds,
          rating: contest.newRating,
          time: contest.ratingUpdateTimeSeconds * 1000,
        });
      });
      datasets.push([data]);
    }
    // console.log("data fetch complete");
    setState((prevState) => {
      return {
        dataFetch: 1,
        users: users,
        datasets: datasets,
      };
    });
  };

  if (!showGraph) {
    return (
      <>
        <Grid container justify="center">
          {indexes.map((index) => (
            <Grid item key={index} xs={6} sm={4}>
              <TextField
                label={`Id${index + 1}`}
                name={`${index}`}
                onChange={(event) => onChangeHandler(event)}
              />
            </Grid>
          ))}
        </Grid>
        <Button onClick={() => setShowGraph(true)} variant="outlined">
          Submit
        </Button>
      </>
    );
  } else {
    fetchDataCF();
    // console.log("Enter else");
    // console.log(users, datasets);
    if (state.dataFetch === 1) {
      // console.log(state.dataFetch);
      return (
        <Grid container align="center" justify="center">
          <Grid item xs={10}>
            <Graph
              data={{ users: state.users, datasets: state.datasets }}
              type={1}
            />
          </Grid>

          <Button
            onClick={() => {
              setShowGraph(false);
              setIds(temp);
            }}
          >
            Go Back
          </Button>
        </Grid>
      );
    } else {
      return <CircularProgress />;
    }
  }
};

export default GetInput;
