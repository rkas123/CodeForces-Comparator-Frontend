import React, { useState, useEffect } from "react";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import CardComponent from "../CardComponent/CardComponent.js";
import axios from "axios";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const [state, setState] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    const fetchCFData = async () => {
      // console.log("fetch CF Data");
      try {
        const data = await axios.get(
          `https://codeforces.com/api/user.rating?handle=${user.codeforces}`
        );
        const temp = data.data.result.map((contest) => {
          return {
            id: contest.ratingUpdateTimeSeconds,
            rating: contest.newRating,
            time: contest.ratingUpdateTimeSeconds * 1000,
          };
        });
        // console.log("CF User Data", temp);
        return new Promise((resolve, reject) => resolve(temp));
      } catch (error) {
        return new Promise((resolve, reject) => reject(error));
      }
    };
    const fetchCCData = async () => {
      // console.log("fetch CC Data");
      try {
        const data = await axios.get(
          `https://competitive-coding-api.herokuapp.com/api/codechef/${user.codechef}`
        );
        const temp = data.data.contest_ratings.map((contest) => {
          let time = Date.parse(contest.end_date);
          var year = parseInt(contest.getyear);
          var month = parseInt(contest.getmonth);
          var day = parseInt(contest.getday);
          if (month < 10) month = "0" + month;
          if (day < 10) day = "0" + day;
          return {
            id: `${year}${month}${day}`,
            rating: contest.rating,
            time: time,
          };
        });
        const prof = {
          name: `${user.codechef}`,
          rating: data.data.rating,
          rank: data.data.stars,
        };
        return new Promise((resolve, reject) =>
          resolve({ data: temp, user: prof })
        );
      } catch (error) {
        return new Promise((resolve, reject) => reject(error));
      }
    };
    const fetchCFProfile = async () => {
      // console.log("fetch CF Profile");
      try {
        const data = await axios.get(
          `https://codeforces.com/api/user.info?handles=${user.codeforces}`
        );
        const temp = {
          name: `${user.codeforces}`,
          rating: data.data.result[0].rating,
          rank: data.data.result[0].rank,
        };
        return new Promise((resolve, reject) => {
          resolve(temp);
        });
      } catch (error) {
        return new Promise((resolve, reject) => reject(error.message));
      }
    };
    if (loader) {
      const temp = await fetchCCData();
      const codechefProfile = temp.user;
      const codechefData = temp.data;
      const codeforcesData = await fetchCFData();
      const codeforcesProfile = await fetchCFProfile();
      setState({
        codechefProfile: codechefProfile,
        codechefData: codechefData,
        codeforcesProfile: codeforcesProfile,
        codeforcesData: codeforcesData,
      });
      setLoader(false);
    }
  }, [loader]);
  // console.log(loader);
  if (loader) {
    return <CircularProgress />;
  } else {
    // console.log("render");
    // console.log(state);
    return (
      <>
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item>
            <Button variant="outlined">Edit Profile</Button>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          {state?.codechefProfile !== null && (
            <Grid item xs={6} sm={3}>
              <CardComponent
                data={state.codechefProfile}
                dataset={state.codechefData}
              />
            </Grid>
          )}
          {state?.codeforcesProfile !== null && (
            <Grid item xs={6} sm={3}>
              <CardComponent
                data={state.codeforcesProfile}
                dataset={state.codeforcesData}
                codeForces
              />
            </Grid>
          )}
        </Grid>
      </>
    );
  }
};

export default Profile;
