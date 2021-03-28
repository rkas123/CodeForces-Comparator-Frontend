import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import Home from "../Home/Home.js";
import Random from "../Random/Random.js";
import Friends from "../Friends/Friends.js";
import Upcoming from "../Upcoming/Upcoming.js";
import { useSelector, useDispatch } from "react-redux";
import { selectedTab } from "../../actions/selectedTab.js";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../../themes/darkTheme.js";
import lightTheme from "../../themes/lightTheme.js";

const TabComp = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme);
  const value = useSelector((state) => state.tab);
  const handleChange = (event, newValue) => {
    dispatch(selectedTab(newValue));
  };
  return (
    <>
      <ThemeProvider theme={darkMode === 1 ? darkTheme : lightTheme}>
        <Paper square>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="PROFILe" />
            <Tab label="compare" />
            <Tab label="CF friends" />
            <Tab label="Upcoming Contests" />
          </Tabs>
        </Paper>
      </ThemeProvider>
      {value === 0 && <Home />}
      {value === 1 && <Random />}
      {value === 2 && <Friends />}
      {value === 3 && <Upcoming />}
    </>
  );
};

export default TabComp;
