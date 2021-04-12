import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Paper, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { selectedTab } from "../../actions/selectedTab.js";
import decode from "jwt-decode";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch(selectedTab(0));
    history.push("/signup");
    setUser(null);
    console.log("logged Out");
  };
  return (
    <>
      <Paper square>
        <Toolbar position="static">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5">CodeForces Comparator</Typography>
            </Grid>
            <Grid item>
              {user === null ? (
                <Button href="/signin" variant="outlined">
                  Login
                </Button>
              ) : (
                <Button variant="outlined" onClick={() => logout()}>
                  Logout
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Paper>
    </>
  );
};

export default Header;
