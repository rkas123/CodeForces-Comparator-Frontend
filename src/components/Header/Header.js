import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../actions/toggleTheme.js";
import {
  Paper,
  Switch,
  // AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  FormControlLabel,
} from "@material-ui/core";
import darkTheme from "../../themes/darkTheme.js";
import lightTheme from "../../themes/lightTheme.js";

const Header = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => {
    return state.theme;
  });
  const themeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
              <Button variant="outlined">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Paper>
    </ThemeProvider>
  );
};

export default Header;
