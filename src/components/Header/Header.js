import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../actions/toggleTheme.js";
import {
  Paper,
  Switch,
  Toolbar,
  Typography,
  Button,
  Grid,
  FormControlLabel,
} from "@material-ui/core";
import darkTheme from "../../themes/darkTheme.js";
import lightTheme from "../../themes/lightTheme.js";
import { useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const darkMode = useSelector((state) => state.theme);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const themeToggle = () => {
    dispatch(toggleTheme());
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/signup");
    setUser(null);
    console.log("logged Out");
  };
  return (
    <ThemeProvider theme={darkMode === 1 ? darkTheme : lightTheme}>
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
              <FormControlLabel
                label={darkMode ? "Dark" : "Light"}
                labelPlacement="top"
                control={
                  <Switch
                    color="default"
                    check={darkMode ? 1 : 0}
                    onChange={themeToggle}
                  ></Switch>
                }
              ></FormControlLabel>
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
    </ThemeProvider>
  );
};

export default Header;
