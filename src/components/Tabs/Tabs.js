import React, { useState, useEffect } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectedTab } from "../../actions/selectedTab.js";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../../themes/darkTheme.js";
import lightTheme from "../../themes/lightTheme.js";
import { Link, useLocation } from "react-router-dom";

const TabComp = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const darkMode = useSelector((state) => state.theme);
  const value = useSelector((state) => state.tab);
  const handleChange = (event, newValue) => {
    dispatch(selectedTab(newValue));
  };
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <ThemeProvider theme={darkMode === 1 ? darkTheme : lightTheme}>
        <Paper square>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="PROFILe" to="/" component={Link} />
            <Tab label="compare" to="/compare" component={Link} />
            <Tab label="CF friends" to="/friends" component={Link} />
            <Tab label="Upcoming Contests" to="upcoming" component={Link} />
          </Tabs>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default TabComp;
