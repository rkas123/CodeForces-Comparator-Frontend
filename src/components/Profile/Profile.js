import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import CardComponent from "../CardComponent/CardComponent.js";
import axios from "axios";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const [codeforcesData, setCodeforcesData] = useState([]);
  const [codechefData, setCodechefData] = useState([]);
  const [codeforcesProfile, setCodeforcesProfile] = useState(null);
  const [codechefProfile, setCodechefProfile] = useState(null);
  useEffect(() => {
    const fetchCFData = async () => {
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
        setCodeforcesData(temp);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCCData = async () => {
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
        setCodechefData(temp);
        setCodechefProfile({
          name: `${user.codechef}`,
          rating: data.data.rating,
          rank: data.data.stars,
        });
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCFProfile = async () => {
      try {
        const data = await axios.get(
          `https://codeforces.com/api/user.info?handles=${user.codeforces}`
        );
        setCodeforcesProfile({
          name: `${user.codeforces}`,
          rating: data.data.result[0].rating,
          rank: data.data.result[0].rank,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchCCData();
    fetchCFData();
    fetchCFProfile();
  }, []);
  return (
    <>
      <Grid container alignItems="center" direction="row" justify="center">
        <Grid item>
          <Button variant="outlined">Edit Profile</Button>
        </Grid>
      </Grid>
      <Grid container justify="space-around">
        {codechefProfile !== null && (
          <Grid item xs={6} sm={3}>
            <CardComponent data={codechefProfile} dataset={codechefData} />
          </Grid>
        )}
        {codeforcesProfile !== null && (
          <Grid item xs={6} sm={3}>
            <CardComponent
              data={codeforcesProfile}
              dataset={codeforcesData}
              codeForces
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Profile;
