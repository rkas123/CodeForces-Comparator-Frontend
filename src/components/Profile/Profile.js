import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import axios from "axios";
// https://codeforces.com/api/user.rating?handle=Fefer_Ivan
// https://competitive-coding-api.herokuapp.com/api/codechef/daft_punk123
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const [codeforcesData, setCodeforcesData] = useState([]);
  const [codechefData, setCodechefData] = useState([]);
  useEffect(() => {
    const fetchCFData = async () => {
      try {
        const data = await axios.get(
          `https://codeforces.com/api/user.rating?handle=${user.codeforces}`
        );
        setCodeforcesData(data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCCData = async () => {
      try {
        const data = await axios.get(
          `https://competitive-coding-api.herokuapp.com/api/codechef/${user.codechef}`
        );
        setCodechefData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCCData();
    fetchCFData();
  }, []);
  return (
    <Grid container alignItems="center" direction="row" justify="center">
      <Grid item>
        <Button variant="outlined">Edit Profile</Button>
      </Grid>
    </Grid>
  );
};

export default Profile;
